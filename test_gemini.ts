import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-pro-preview',
    contents: 'Hello, world!',
  });
  console.log(response.text);
}
main().catch(console.error);
