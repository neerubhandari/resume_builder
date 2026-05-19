from flask import Flask, request, jsonify
from parser.extract_text import extract_text
from parser.resume_parser import parse_resume
import pdfplumber
import re

app = Flask(__name__)

@app.route("/parse", methods=["POST"])
def parse():
    try:
        file = request.files["file"]

        if not file:
            return jsonify({
                "success": False,
                "message": "No file uploaded"
            }), 400
        
        with pdfplumber.open(file) as pdf:
        # Extracts text while respecting the visual layout
            resume_text = "\n".join([page.extract_text(layout=True) for page in pdf.pages])

        text = re.sub(r"\n+", "\n", resume_text)
        text = re.sub(r"[ \t]+", " ", text)
        text_resume = text.strip()



       # ----------------------------
        # CLEANING
        # ----------------------------
        text = re.sub(r"\n+", "\n", resume_text)
        #remove parenthesis
        text = text.replace("(", "").replace(")", "")
        # normalize weird unicode dashes to normal dash
        text = text.replace("‐", "-").replace("–", "-").replace("—", "-")
        text = re.sub(r"[ \t]+", " ", text)
  
        text_resume = text.strip()

        #Extract Email
        email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        emails = re.findall(email_pattern, text_resume)
        print("EMAIL",emails)

        #Extract Phone
        phone_pattern = r"\+?\d[\d\s().-]{7,}\d"
        phones = re.findall(phone_pattern, text_resume)
        print("PHONE",phones)


        print( "CLEAN TEXT",text_resume)
        text = extract_text(file)
        parsed_data = parse_resume(text)

        return jsonify({
            "success": True,
            "data": parsed_data
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=5002)