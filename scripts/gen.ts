import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({});

async function generateLessons() {
  for (let i = 2; i <= 5; i++) {
    const p = path.join(process.cwd(), `src/data/b2-lesson-${i}.ts`);
    if (fs.existsSync(p)) continue;
    console.log("Generating lesson", i);
    const prompt = `Generate a B2 English vocabulary lesson with EXACTLY 10 words.
Return valid TypeScript code exporting a constant \`b2Lesson${i}: Lesson\` that matches the Lesson interface.
Do NOT use markdown code blocks, just raw TS code.
Include translations for: ru, zh, es, fr, de, tr, ja.
Include 1 meaning per word, 1 example per meaning.
Include a ReadingText with ~150 words using all 10 words, and 3 comprehension questions.
Level: B2, number: ${i}.
Make sure the TS syntax is perfect.
Use imports: \`import { Lesson } from '../types';\`
Do not include any other text, only the TS code.
`;
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview', // Or whatever is available, I will use standard names
        contents: prompt,
        config: { temperature: 0.2 }
      });
      let text = response.text || "";
      text = text.replace(/```typescript/g, "").replace(/```ts/g, "").replace(/```/g, "");
      fs.writeFileSync(p, text);
      
      // Update index
      let index = fs.readFileSync(path.join(process.cwd(), 'src/data/lessons.ts'), 'utf8');
      index = index.replace('// We will add more lessons here', `import { b2Lesson${i} } from './b2-lesson-${i}';\n// We will add more lessons here\navailableLessons.push(b2Lesson${i});`);
      fs.writeFileSync(path.join(process.cwd(), 'src/data/lessons.ts'), index);
    } catch (e) {
      console.error(e);
    }
  }
}
generateLessons();
