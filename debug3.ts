import { tokenizeText } from './src/utils/wordRecognition.ts';
const text = "She won an award for her excellent investigative journalism.";
const targetWords = ["journalism"];
console.log(tokenizeText(text, targetWords));
