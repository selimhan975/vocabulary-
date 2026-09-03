let activeUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// Pre-load voices for better performance and to handle async loading in some browsers
const loadVoices = () => {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    cachedVoices = voices;
  }
};

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

const getBestEnglishVoice = (): SpeechSynthesisVoice | null => {
  if (cachedVoices.length === 0) loadVoices();
  const enVoices = cachedVoices.filter(v => v.lang.startsWith('en'));
  
  // Try to find a premium/natural sounding voice first
  const preferred = enVoices.find(v => 
    v.name.includes('Google US English') || 
    v.name.includes('Samantha') || 
    v.name.includes('Daniel')
  );
  
  return preferred || enVoices[0] || null;
};

export const speak = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech not supported in this browser.');
    onEnd?.();
    return;
  }

  // Safely cancel any ongoing speech to avoid overlapping
  window.speechSynthesis.cancel();

  activeUtterance = new SpeechSynthesisUtterance(text);
  activeUtterance.lang = 'en-US';
  activeUtterance.rate = 0.95; // Natural learning speed

  const voice = getBestEnglishVoice();
  if (voice) {
    activeUtterance.voice = voice;
  }

  if (onStart) activeUtterance.onstart = onStart;
  
  activeUtterance.onend = () => {
    onEnd?.();
    activeUtterance = null;
  };
  
  activeUtterance.onerror = (e) => {
    // Suppress expected errors when we manually cancel speech
    if (e.error !== 'interrupted' && e.error !== 'canceled') {
      console.warn('SpeechSynthesis API Error:', e.error);
    }
    onEnd?.();
    activeUtterance = null;
  };

  // Adding a slight timeout ensures cancel() finishes and prevents iOS/Android stutter bugs
  setTimeout(() => {
    if (activeUtterance) {
      window.speechSynthesis.speak(activeUtterance);
    }
  }, 50);
};
