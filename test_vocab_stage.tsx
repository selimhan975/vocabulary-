import React, { useState, useEffect } from 'react';
import { translationEngine } from './src/engine/translation';
import { b2Lesson46 } from './src/data/b2-lesson-46';

export const TestComponent = () => {
    const currentWord = b2Lesson46.words[0]; // journalism
    const [resolvedTranslation, setResolvedTranslation] = useState<string>('');
    const targetLang = translationEngine.getLanguage(); // mock

    useEffect(() => {
        let isMounted = true;
        const authored = translationEngine.getAuthoredTranslation(currentWord.translations);
        if (authored) {
            setResolvedTranslation(authored);
            return;
        }
        translationEngine.translateWordOffline(currentWord.word).then(res => {
            if (isMounted) setResolvedTranslation(res.translation);
        });
        return () => { isMounted = false; };
    }, [currentWord, targetLang]);

    return <div>{resolvedTranslation}</div>;
}
