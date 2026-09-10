import { LanguageCode, TranslationMap } from '../types';
import { availableLessons } from '../data/lessons';
import { globalDictionary } from '../data/dictionary';

import { isInflectionOf, cleanToken } from '../utils/wordRecognition';

export class TranslationEngine {
  private currentLang: LanguageCode = 'es';
  private static STORAGE_KEY = 'vocab_app_lang';

  constructor() {
    try {
      const stored = localStorage.getItem(TranslationEngine.STORAGE_KEY);
      if (stored) {
        this.currentLang = stored as LanguageCode;
      }
    } catch (e) {
      console.error('Failed to load language preference', e);
    }
  }

  setLanguage(lang: LanguageCode) {
    this.currentLang = lang;
    try {
      localStorage.setItem(TranslationEngine.STORAGE_KEY, lang);
    } catch (e) {
      console.error('Failed to save language preference', e);
    }
  }

  getLanguage(): LanguageCode {
    return this.currentLang;
  }

  getAuthoredTranslation(translations: TranslationMap): string | null {
    if (translations[this.currentLang]) {
      return translations[this.currentLang];
    }
    return null;
  }

  async translateWordOffline(word: string, contextSentence?: string): Promise<{ translation: string, canonical: string }> {
    const cleanWord = cleanToken(word);
    
    if (!cleanWord) {
      return { translation: `Translation unavailable offline`, canonical: word };
    }

    try {
      // First, scan available lessons
      for (const lesson of availableLessons) {
        for (const w of lesson.words) {
          if (isInflectionOf(cleanWord, w.word)) {
            if (w.translations && w.translations[this.currentLang]) {
              return { translation: w.translations[this.currentLang], canonical: w.word };
            }
          }
        }
      }

      // Second, scan the global offline dictionary
      if (globalDictionary[cleanWord] && globalDictionary[cleanWord][this.currentLang]) {
        return { translation: globalDictionary[cleanWord][this.currentLang], canonical: cleanWord };
      }

      // Try inflection match against global dictionary
      for (const key of Object.keys(globalDictionary)) {
        if (isInflectionOf(cleanWord, key)) {
          if (globalDictionary[key][this.currentLang]) {
            return { translation: globalDictionary[key][this.currentLang], canonical: key };
          }
        }
      }

      // Fallback if unavailable
      return { translation: `Translation unavailable offline`, canonical: cleanWord };
    } catch (error) {
      console.error("Error during offline translation:", error);
      return { translation: `Translation unavailable offline`, canonical: cleanWord };
    }
  }
}

export const translationEngine = new TranslationEngine();

