import re


def extract_experience(lines):
    experiences = []
    current = []

    for line in lines:
        if re.search(r"\b\d{4}\b", line):
            current.append(line)
            experiences.append(" ".join(current))
            current = []
        else:
            current.append(line)

    return experiences