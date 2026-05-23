import re


def extract_education(lines):
    education_data = []
    current = []

    for line in lines:
        if re.search(r"\b\d{4}\b", line):
            current.append(line)
            education_data.append(" ".join(current))
            current = []
        else:
            current.append(line)

    return education_data