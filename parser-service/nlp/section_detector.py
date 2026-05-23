SECTION_HEADERS = {
    "summary": ["summary", "profile", "objective"],
    "experience": ["experience", "work experience", "employment history"],
    "education": ["education", "academic background"],
    "projects": ["projects", "personal projects"],
    "skills": ["skills", "technical skills", "tech stack"]
}


def detect_sections(lines):
    sections = {k: [] for k in SECTION_HEADERS}
    current = None

    for line in lines:
        l = line.lower().replace(":", "")

        matched = False
        for section, keywords in SECTION_HEADERS.items():
            if l in keywords:
                current = section
                matched = True
                break

        if not matched and current:
            sections[current].append(line)

    return sections