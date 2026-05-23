from nlp.personal_info_extractor import extract_personal_info
from nlp.skills_extractor import extract_skills
from nlp.section_detector import detect_sections
from nlp.education_extractor import parse_education_block


def parse_resume(text: str):

    lines = [line.strip() for line in text.split("\n") if line.strip()]

    sections = detect_sections(lines)

    education_blocks = sections.get("education", [])

    education_data = [
        parse_education_block(block)
        for block in education_blocks
    ]


      # ✅ skills from section
    section_skills_text = (sections["skills"])


    # ✅ fallback skills from full text
    global_skills = extract_skills(text)

    # merge + remove duplicates
    skills = list(set(section_skills_text + global_skills))

    return {
        "personalInfo": extract_personal_info(text, lines),
        "summary": "\n".join(sections["summary"]),
        "experience": "\n".join(sections["experience"]),
        "education_date": education_data,
        "education": education_data,
        "projects": sections["projects"],
        "skills": skills
    }