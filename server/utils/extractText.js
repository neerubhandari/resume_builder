import { PDFParse } from "pdf-parse";

export const extractText = async (file) => {
  if (file.mimetype === "application/pdf") {
    const buffer = new Uint8Array(file.buffer);
    const parser = new PDFParse(buffer);
    const result = await parser.getText();
    return result.text;
  }

  return "";
};
