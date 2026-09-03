import { LanguageCode, TranslationMap } from '../types';

export class TranslationEngine {
  private currentLang: LanguageCode = 'es';

  setLanguage(lang: LanguageCode) {
    this.currentLang = lang;
  }

  getLanguage(): LanguageCode {
    return this.currentLang;
  }

  // Gets the translation from an authored map, falling back to english or empty
  getAuthoredTranslation(translations: TranslationMap): string | null {
    if (translations[this.currentLang]) {
      return translations[this.currentLang];
    }
    return null;
  }

  // Simulates an offline dictionary lookup for individual words in context
  async translateWordOffline(word: string): Promise<string | null> {
    // Strip punctuation for lookup
    const cleanWord = word.replace(/[^\w\s-]/g, '').toLowerCase().trim();
    
    // Mock dictionary for MVP. 
    // In a real scenario, this would load a local SQLite DB or WASM model.
    const mockDict: Record<string, Record<string, string>> = {
      'resilient': { 'es': 'resiliente', 'ru': 'стойкий', 'zh': '有韧性的' },
      'implement': { 'es': 'implementar', 'ru': 'внедрять', 'zh': '实施' },
      'maintain': { 'es': 'mantener', 'ru': 'поддерживать', 'zh': '保持' },
      'crucial': { 'es': 'crucial', 'ru': 'решающий', 'zh': '至关重要的' },
      'evolve': { 'es': 'evolucionar', 'ru': 'эволюционировать', 'zh': '进化' },
      'constant': { 'es': 'constante', 'ru': 'постоянный', 'zh': '不断的' },
      'significant': { 'es': 'significativo', 'ru': 'значительный', 'zh': '重大的' },
      'obtain': { 'es': 'obtener', 'ru': 'получать', 'zh': '获得' },
      'adapt': { 'es': 'adaptar', 'ru': 'адаптироваться', 'zh': '适应' },
      'fulfill': { 'es': 'cumplir', 'ru': 'выполнять', 'zh': '履行' },
      'important': { 'es': 'importante', 'ru': 'важно', 'zh': '重要' },
      'car': { 'es': 'coche', 'ru': 'машина', 'zh': '汽车' },
      'regularly': { 'es': 'regularmente', 'ru': 'регулярно', 'zh': '定期地' },
      'achieve': { 'es': 'lograr', 'ru': 'достигать', 'zh': '实现' },
      'require': { 'es': 'requerir', 'ru': 'требовать', 'zh': '需要' },
      'involve': { 'es': 'implicar', 'ru': 'включать', 'zh': '涉及' },
      'sustainable': { 'es': 'sostenible', 'ru': 'устойчивый', 'zh': '可持续的' },
      'perspective': { 'es': 'perspectiva', 'ru': 'перспектива', 'zh': '视角' },
    };

    if (mockDict[cleanWord] && mockDict[cleanWord][this.currentLang]) {
      return mockDict[cleanWord][this.currentLang];
    }

    // Generic fallback for demo
    return `[${this.currentLang}: ${cleanWord}]`;
  }
}

export const translationEngine = new TranslationEngine();
