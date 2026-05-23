from flask import Blueprint, request, jsonify
from parser.extract_text import extract_text
from parser.resume_parser import parse_resume

resume_bp = Blueprint("resume_bp", __name__)


@resume_bp.route("/parse", methods=["POST"])
def parse_resume_route():
    try:
        file = request.files.get("file")

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