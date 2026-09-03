import { LanguageCode, TranslationMap } from '../types';
import { availableLessons } from '../data/lessons';
import { globalDictionary } from '../data/dictionary';

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

  async translateWordOffline(word: string, contextSentence?: string): Promise<string | null> {
    const cleanWord = word.replace(/[^\w\s-]/g, '').toLowerCase().trim();
    
    // First, scan available lessons for an exact or stem match
    for (const lesson of availableLessons) {
      for (const w of lesson.words) {
        const targetWord = w.word.toLowerCase();
        // Basic stemming check
        if (
          targetWord === cleanWord ||
          targetWord + 's' === cleanWord ||
          targetWord + 'es' === cleanWord ||
          targetWord + 'd' === cleanWord ||
          targetWord + 'ed' === cleanWord ||
          targetWord + 'ing' === cleanWord ||
          targetWord.replace(/e$/, 'ing') === cleanWord
        ) {
          if (w.translations && w.translations[this.currentLang]) {
            return w.translations[this.currentLang];
          }
        }
      }
    }

    // Second, scan the global offline dictionary
    if (globalDictionary[cleanWord] && globalDictionary[cleanWord][this.currentLang]) {
      return globalDictionary[cleanWord][this.currentLang];
    }

    // Try stem match against global dictionary
    for (const key of Object.keys(globalDictionary)) {
      if (
        key + 's' === cleanWord ||
        key + 'es' === cleanWord ||
        key + 'd' === cleanWord ||
        key + 'ed' === cleanWord ||
        key + 'ing' === cleanWord ||
        key.replace(/e$/, 'ing') === cleanWord
      ) {
        if (globalDictionary[key][this.currentLang]) {
          return globalDictionary[key][this.currentLang];
        }
      }
    }

    // Fallback if unavailable
    return `Translation unavailable offline`;
  }
}

export const translationEngine = new TranslationEngine();

