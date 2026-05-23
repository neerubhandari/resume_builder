from utils.text_cleaner import clean_text
from nlp.section_detector import detect_sections
from nlp.personal_info_extractor import extract_personal_info
from nlp.skills_extractor import extract_skills
from nlp.education_extractor import extract_education
from nlp.experience_extractor import extract_experience
from core.schema import ResumeSchema, PersonalInfo, Education


class ResumeService:

    def parse_resume(self, text: str):

        text = clean_text(text)
        lines = text.split("\n")

        sections = detect_sections(lines)

        personal_info = extract_personal_info(text, lines)
        skills = extract_skills(text)
        education_raw = extract_education(sections["education"])
        experience = extract_experience(sections["experience"])

        education = [
            Education(
                institutionName=edu,
                degreeName="",
                fieldOfStudy="",
                endDate="",
                gpaScore=""
            )
            for edu in education_raw
        ]

        return ResumeSchema(
            personalInfo=PersonalInfo(**personal_info),
            summary="\n".join(sections["summary"]),
            experience=experience,
            education=education,
            projects=sections["projects"],
            skills=skills
        )