def clean_text(text: str) -> str:
    text = text.replace("\r", "\n")
    text = "\n".join([line.strip() for line in text.split("\n")])
    return text