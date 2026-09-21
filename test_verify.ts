import { translationEngine } from './src/engine/translation';
import { b2Lesson46 } from './src/data/b2-lesson-46';

async function testWord(wordObj: any, wordName: string) {
    if (!wordObj) {
        console.log(`Word ${wordName} not found`);
        return;
    }
    console.log(`\nTesting word: ${wordName}`);
    const langs = ['ru', 'es', 'zh', 'fr', 'de', 'tr', 'ja'];
    for (const lang of langs) {
        translationEngine.setLanguage(lang as any);
        
        let mainTranslation = '';
        const authored = translationEngine.getAuthoredTranslation(wordObj.translations);
        if (authored) {
            mainTranslation = authored;
        } else {
            const res = await translationEngine.translateWordOffline(wordObj.word);
            mainTranslation = res.translation;
        }
        
        console.log(`${lang.toUpperCase()}: ${mainTranslation}`);
    }
}

async function run() {
    const w1 = b2Lesson46.words.find(w => w.word === 'journalism');
    const w2 = b2Lesson46.words.find(w => w.word === 'publish');
    const w3 = b2Lesson46.words.find(w => w.word === 'censorship');
    const w4 = b2Lesson46.words.find(w => w.word === 'tabloid');
    const w5 = b2Lesson46.words.find(w => w.word === 'headline');
    const w6 = b2Lesson46.words.find(w => w.word === 'correspondent');
    
    await testWord(w1, 'journalism');
    await testWord(w2, 'publish');
    await testWord(w3, 'censorship');
    await testWord(w4, 'tabloid');
    await testWord(w5, 'headline');
    await testWord(w6, 'correspondent');
}

run();
