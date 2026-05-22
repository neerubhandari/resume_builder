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
        
        
    DEGREE_KEYWORDS = [
        "bachelor",
        "master",
        "b.tech",
        "m.tech",
        "bsc",
        "msc",
        "mba",
        "phd",
        "computer engineering",
        "computer science"
    ]

    def group_education(lines):

        blocks = []
        current = []

        for line in lines:

            l = line.lower()

            # skip noise
            if "page" in l:
                continue

            # if line contains year → likely end of entry
            if re.search(r"\b\d{4}\b", line):
                current.append(line)
                blocks.append(" ".join(current))
                current = []
            else:
                current.append(line)

        if current:
            blocks.append(" ".join(current))

        return blocks
    
    def extract_education_details(education_lines):

        education_data = []

        blocks = group_education(education_lines)

        for block in blocks:

            block_lower = block.lower()

            years = re.findall(r"\b\d{4}\b", block)

            degree_match = re.search(
                r"(bachelor|master|b\.?tech|m\.?tech|bsc|msc|mba|phd)",
                block_lower
            )

            degree = degree_match.group(0) if degree_match else ""

            college = re.split(
                r"(bachelor|master|b\.?tech|m\.?tech|bsc|msc|mba|phd)",
                block,
                flags=re.I
            )[0]

            college = re.sub(r"\b\d{4}\b", "", college).strip(" -|,·")

            education_data.append({
            "gpaScore":"",
            "institutionName": college.strip(),
            "degreeName": degree,
            "fieldOfStudy":"",
            "endDate": years[1] if len(years) > 1 else ""
            })
        return education_data


    sections = split_sections(lines)
    education_data = extract_education_details(sections["education"])
    print(education_data,"education_data")
    # return education_data
    # sections = split_sections(lines)
    # print("EDUCATION:", sections["education"])
    # education_text = " ".join(sections["education"])
    # print(education_text,"education_text")
    # years = re.findall(r"\b\d{4}\b", education_text)
    # latest_year = max(map(int, years))
    # print(latest_year,"years")
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
        "education": education_data,
        "projects": (sections["projects"]),
        # "experience": "",
        # "education": "",
        # "projects": "",
        "skills": (sections["skills"])

    }