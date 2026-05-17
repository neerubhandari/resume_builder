export const parseSkills = (text) => {
  const lowerText = text.toLowerCase();

  // 1. Try to find SKILLS section
  const skillsSectionMatch = text.match(
    /skills[\s\S]*?(experience|education|projects|$)/i,
  );

  let skillsText = "";

  if (skillsSectionMatch) {
    skillsText = skillsSectionMatch[0];
  } else {
    // fallback → use whole text
    skillsText = text;
  }

  // 2. Split by common separators
  const rawSkills = skillsText
    .replace(/skills/i, "")
    .split(/[,•|\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  // 3. clean duplicates + junk filtering
  const cleaned = [...new Set(rawSkills)].filter((skill) => {
    return (
      skill.length > 1 &&
      skill.length < 30 &&
      !/experience|education|projects/i.test(skill)
    );
  });

  return cleaned.map((skill) => ({
    id: crypto.randomUUID(),
    skillSet: skill,
  }));
};
