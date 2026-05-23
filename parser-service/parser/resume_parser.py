from nlp.personal_info_extractor import extract_personal_info
from nlp.skills_extractor import extract_skills
from nlp.section_detector import detect_sections
from nlp.education_extractor import extract_education


def parse_resume(text: str):

    lines = [line.strip() for line in text.split("\n") if line.strip()]

    sections = detect_sections(lines)

    education_data = extract_education(sections["education"])


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
        # "education": education_data,
        "education": "",
        "projects": sections["projects"],
        "skills": skills
    }