import re


def extract_personal_info(text, lines):
    email = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+", text)
    phone = re.findall(r"(\+?\d[\d\s\-]{8,})", text)

    linkedin = re.findall(r"linkedin\.com/in/[A-Za-z0-9\-_/]+", text)
    website = re.findall(r"https?://[^\s]+", text)

    name = ""
    for line in lines[:5]:
        words = line.split()
        if 2 <= len(words) <= 4 and all(w.replace(".", "").isalpha() for w in words):
            name = line
            break

    return {
        "name": name,
        "email": email[0] if email else "",
        "phone": phone[0] if phone else "",
        "linkedin": linkedin[0] if linkedin else "",
        "website": website[0] if website else "",
    }