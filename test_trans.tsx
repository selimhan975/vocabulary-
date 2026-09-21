import { tokenizeText } from './src/utils/wordRecognition.ts';
import { translationEngine } from './src/engine/translation.ts';

async function test() {
  translationEngine.setLanguage('ru');
  const tokens = tokenizeText("She won an award for her excellent investigative journalism.", ["journalism"]);
  
  for (const token of tokens) {
    if (token.text === "journalism") {
      const lookupWord = token.canonical || token.text;
      const result = await translationEngine.translateWordOffline(lookupWord);
      console.log("Translation for 'journalism':", result);
    }
  }
}
test();
