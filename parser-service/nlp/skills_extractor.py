SKILL_DB = [
    "python", "java", "javascript", "react", "node",
    "flask", "django", "sql", "mongodb", "aws",
    "docker", "git", "html", "css"
]


def extract_skills(text: str):
    text = text.lower()
    return [skill for skill in SKILL_DB if skill in text]