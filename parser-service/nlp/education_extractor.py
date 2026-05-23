import re

def parse_education_block(block):
    block = block.replace("–", "-")

    years = [int(y) for y in re.findall(r"(?:19|20)\d{2}", block)]

    return {
        "institutionName": block.split("\n")[0].strip(),
        "degreeName": "",
        "fieldOfStudy": "",
        "endDate": str(max(years)) if years else "",
        "gpa": ""
    }