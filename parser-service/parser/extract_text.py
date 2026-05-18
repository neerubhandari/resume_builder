import pdfplumber

def extract_text(file):
    """
    Extract raw text from uploaded PDF file (Flask file object)
    """
    text = ""

    try:
        with pdfplumber.open(file) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        raise Exception(f"Failed to extract text: {str(e)}")

    return text