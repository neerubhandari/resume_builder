import re

SECTION_HEADERS = {
    "summary": [
        "summary",
        "professional summary",
        "profile",
        "career summary",
        "executive summary",
        "about me",
        "objective",
        "career objective",
        "personal statement",
        "professional profile",
        "overview"
    ],

    "experience": [
        "experience",
        "work experience",
        "professional experience",
        "employment history",
        "work history",
        "career history",
        "internship",
        "internships",
        "relevant experience"
    ],

    "education": [
        "education",
        "academic background",
        "academic qualifications",
        "qualifications",
        "educational qualifications",
        "education and training"
    ],

    "projects": [
        "projects",
        "personal projects",
        "academic projects",
        "professional projects",
        "key projects",
        "project experience"
    ],

    "skills": [
        "skills",
        "technical skills",
        "core skills",
        "key skills",
        "competencies",
        "expertise",
        "technologies",
        "tech stack",
        "tools",
        "skills and abilities"
    ],
}


def parse_resume(text):

    lines = [line.strip() for line in text.split("\n") if line.strip()]

    # ---------- BASIC INFO ----------
    email = re.findall(
        r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
        text
    )

    phone = re.findall(
        r"(\+?\d[\d\s\-]{8,})",
        text
    )

    linkedin = re.findall(
        r"(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9\-_/]+",
        text
    )

    website = re.findall(
        r"https?:\/\/[^\s]+",
        text
    )

    # ---------- NAME ----------
    def extract_name(lines):

        for line in lines[:5]:

            words = line.split()

            if (
                2 <= len(words) <= 4
                and all(w.replace(".", "").isalpha() for w in words)
                and not any(
                    x in line.lower()
                    for x in ["resume", "cv", "profile"]
                )
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

        return [
            skill
            for skill in SKILL_DB
            if skill in text_lower
        ]

    # ---------- SECTION PARSING ----------
    def split_sections(lines):

        sections = {
            "summary": [],
            "experience": [],
            "education": [],
            "projects": [],
            "skills": []
        }

        current = None

        for line in lines:

            l = line.strip().lower().replace(":", "")

            # Detect section heading
            found = False

            for section, keywords in SECTION_HEADERS.items():

                if l in keywords:
                    current = section
                    found = True
                    break

            if found:
                continue

            if current:
                sections[current].append(line)

        return sections

    sections = split_sections(lines)

    print("SUMMARY:", sections["summary"])
    print("EXPERIENCE:", sections["experience"])
    print("EDUCATION:", sections["education"])
    print("PROJECTS:", sections["projects"])

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

        "summary": "\n".join(sections["summary"]),
        "experience": "\n".join(sections["experience"]),
        "education": "\n".join(sections["education"]),
        "projects": "\n".join(sections["projects"]),
        "skills": extract_skills(text)
    }