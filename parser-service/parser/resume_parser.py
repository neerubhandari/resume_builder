import re

def parse_resume(text):
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    print(lines,"linesss")

    # ---------- BASIC INFO ----------
    email = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)
    phone = re.findall(r"(\+?\d[\d\s\-]{8,})", text)

    linkedin = re.findall(
        r"(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9\-_/]+",
        text
    )

    website = re.findall(r"https?:\/\/[^\s]+", text)

    # ---------- NAME ----------
    def extract_name(lines):
        for line in lines[:5]:
            words = line.split()
            if (
                2 <= len(words) <= 4
                and all(w.replace(".", "").isalpha() for w in words)
                and not any(x in line.lower() for x in ["resume", "cv", "profile"])
            ):
                return line
        return ""

    # ---------- LOCATION ----------
    def extract_location(lines):
        for line in lines[:10]:
            if "," in line and len(line) < 40:
                return line
        return ""

    # ---------- SKILLS ----------
    SKILL_DB = [
        "python", "java", "javascript", "react", "node",
        "flask", "django", "sql", "mongodb", "aws",
        "docker", "git", "html", "css"
    ]

    def extract_skills(text):
        text_lower = text.lower()
        return [s for s in SKILL_DB if s in text_lower]

    # ---------- SECTION PARSING ----------
    def split_sections(lines):
        sections = {
            "education": [],
            "experience": [],
            "projects": [],
            "skills": [],
            "summary": []
        }

        current = None

        for line in lines:
            l = line.lower()

            if "education" in l:
                current = "education"
                continue
            elif "experience" in l:
                current = "experience"
                continue
            elif "project" in l:
                current = "projects"
                continue
            elif "skill" in l:
                current = "skills"
                continue
            elif "summary" in l:
                current = "summary"
                continue

            if current:
                sections[current].append(line)

        return sections

    sections = split_sections(lines)

    return {
        "personalInfo": {
            "name": extract_name(lines),
            "email": email[0] if email else "",
            "phone": phone[0].strip() if phone else "",
            "location": extract_location(lines),
            "profession": "",
            "linkedIn": linkedin[0][0] if linkedin else "",
            "website": website[0] if website else "",
        },
        "summary":sections["summary"],
        "experience": sections["experience"],
        "education": sections["education"],
        "projects": sections["projects"],
        "skills": extract_skills(text)
    }