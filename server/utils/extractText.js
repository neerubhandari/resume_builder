import { PDFParse } from "pdf-parse";

export async function extractText(buffer) {
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  const result = await parser.getText();
  return result.text;
}
