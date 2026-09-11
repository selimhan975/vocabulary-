import { LanguageCode, TranslationMap } from '../types';
import { availableLessons } from '../data/lessons';
import { globalDictionary } from '../data/dictionary';
import { isInflectionOf, cleanToken, irregularMap } from '../utils/wordRecognition';

interface IndexEntry {
  canonical: string;
  translations: TranslationMap;
}

export class TranslationEngine {
  private currentLang: LanguageCode = 'es';
  private static STORAGE_KEY = 'vocab_app_lang';
  
  // O(1) Lookup indices initialized lazily
  private exactMap: Map<string, IndexEntry> | null = null;
  private candidateMap: Map<string, IndexEntry[]> | null = null;

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
  
  private initializeIndices() {
    if (this.exactMap && this.candidateMap) return;
    
    this.exactMap = new Map();
    this.candidateMap = new Map();
    
    const addEntry = (canonical: string, translations: TranslationMap) => {
      const cleanCanonical = cleanToken(canonical);
      if (!cleanCanonical) return;
      
      const entry: IndexEntry = { canonical, translations };
      
      // Add to exact map (resolves instantly)
      this.exactMap!.set(cleanCanonical, entry);
      
      // Add to candidate map (indexed by first 2 characters of the canonical stem)
      const prefix = cleanCanonical.substring(0, 2);
      if (!this.candidateMap!.has(prefix)) {
        this.candidateMap!.set(prefix, []);
      }
      this.candidateMap!.get(prefix)!.push(entry);
    };

    // 1. Add all lesson words (Priority lookup)
    for (const lesson of availableLessons) {
      for (const w of lesson.words) {
        if (w.translations) {
          addEntry(w.word, w.translations);
        }
      }
    }
    
    // 2. Add global dictionary words
    for (const key of Object.keys(globalDictionary)) {
      addEntry(key, globalDictionary[key]);
    }
  }

  async translateWordOffline(word: string, contextSentence?: string): Promise<{ translation: string, canonical: string }> {
    const cleanWord = cleanToken(word);
    
    if (!cleanWord) {
      return { translation: `Translation unavailable offline`, canonical: word };
    }
    
    try {
      this.initializeIndices();

      // 1. O(1) Exact match fast path
      const exact = this.exactMap!.get(cleanWord);
      if (exact && exact.translations[this.currentLang]) {
        return { translation: exact.translations[this.currentLang], canonical: exact.canonical };
      }

      // 2. Resolve target prefix by evaluating potential irregular first words (e.g. "went off" -> "go off" -> "go")
      let prefixWord = cleanWord;
      const firstWord = cleanWord.split(' ')[0];
      if (irregularMap[firstWord]) {
        prefixWord = irregularMap[firstWord] + cleanWord.slice(firstWord.length);
      }
      const prefix = prefixWord.substring(0, 2);

      // 3. Narrow candidate search (Scans only a fraction of words sharing the same 2-letter prefix)
      const candidates = this.candidateMap!.get(prefix);
      if (candidates) {
        for (const candidate of candidates) {
          if (isInflectionOf(cleanWord, candidate.canonical)) {
            if (candidate.translations[this.currentLang]) {
              return { translation: candidate.translations[this.currentLang], canonical: candidate.canonical };
            }
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
