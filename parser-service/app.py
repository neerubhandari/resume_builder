from flask import Flask, request, jsonify
from parser.extract_text import extract_text
from parser.resume_parser import parse_resume

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