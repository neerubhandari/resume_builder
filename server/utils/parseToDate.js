export const parseToDate = (dateStr) => {
  if (!dateStr) return null;
  if (dateStr.includes("-") && dateStr.length >= 7) return new Date(dateStr);

  const parts = dateStr.split("/");
  if (parts.length === 2) {
    const month = parseInt(parts[0], 10) - 1;
    const year = parseInt(parts[1], 10);
    return new Date(year, month, 1);
  }

  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? null : parsed;
};
