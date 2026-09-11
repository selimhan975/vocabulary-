export const irregularMap: Record<string, string> = {
  'went': 'go',
  'gone': 'go',
  'took': 'take',
  'taken': 'take',
  'saw': 'see',
  'seen': 'see',
  'made': 'make',
  'came': 'come',
  'thought': 'think',
  'found': 'find',
  'gave': 'give',
  'given': 'give',
  'told': 'tell',
  'felt': 'feel',
  'became': 'become',
  'left': 'leave',
  'put': 'put',
  'brought': 'bring',
  'began': 'begin',
  'begun': 'begin',
  'kept': 'keep',
  'held': 'hold',
  'wrote': 'write',
  'written': 'write',
  'stood': 'stand',
  'heard': 'hear',
  'let': 'let',
  'meant': 'mean',
  'set': 'set',
  'met': 'meet',
  'ran': 'run',
  'paid': 'pay',
  'sat': 'sit',
  'spoke': 'speak',
  'spoken': 'speak',
  'lay': 'lie',
  'lain': 'lie',
  'led': 'lead',
  'read': 'read',
  'grew': 'grow',
  'grown': 'grow',
  'lost': 'lose',
  'fell': 'fall',
  'fallen': 'fall',
  'sent': 'send',
  'built': 'build',
  'understood': 'understand',
  'drew': 'draw',
  'drawn': 'draw',
  'broke': 'break',
  'broken': 'break',
  'spent': 'spend',
  'cut': 'cut',
  'rose': 'rise',
  'risen': 'rise',
  'drove': 'drive',
  'driven': 'drive',
  'bought': 'buy',
  'wore': 'wear',
  'worn': 'wear',
  'chose': 'choose',
  'chosen': 'choose'
};

export function cleanToken(token: string): string {
  return token.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '').toLowerCase().trim();
}

export function isInflectionOf(token: string, targetWord: string): boolean {
  const cleanTok = cleanToken(token);
  const target = cleanToken(targetWord);
  
  if (!cleanTok || !target) return false;
  if (cleanTok === target) return true;

  if (target.includes(' ') && cleanTok.includes(' ')) {
    const targetParts = target.split(' ');
    const tokParts = cleanTok.split(' ');
    if (targetParts.length === tokParts.length) {
      if (isInflectionOf(tokParts[0], targetParts[0])) {
        let restMatch = true;
        for (let i = 1; i < targetParts.length; i++) {
          if (tokParts[i] !== targetParts[i]) {
            restMatch = false;
            break;
          }
        }
        if (restMatch) return true;
      }
    }
  }


  // Check explicit irregulars
  if (irregularMap[cleanTok] === target) return true;

  // Regular noun/verb/adjective inflections
  if (
    target + 's' === cleanTok ||
    target + 'es' === cleanTok ||
    target + 'd' === cleanTok ||
    target + 'ed' === cleanTok ||
    target + 'ing' === cleanTok ||
    target.replace(/e$/, 'ing') === cleanTok ||
    target.replace(/([^aeiou])y$/, '$1ies') === cleanTok ||
    target.replace(/([^aeiou])y$/, '$1ied') === cleanTok ||
    target.replace(/y$/, 'ies') === cleanTok || // some exceptions may exist
    target.replace(/y$/, 'ied') === cleanTok
  ) {
    return true;
  }

  // Consonant doubling (e.g. drop -> dropped, dropping, run -> running, big -> bigger, biggest)
  const lastChar = target.slice(-1);
  if (/[bdfgklmnprstz]/.test(lastChar)) {
    if (
      target + lastChar + 'ed' === cleanTok || 
      target + lastChar + 'ing' === cleanTok || 
      target + lastChar + 'er' === cleanTok || 
      target + lastChar + 'est' === cleanTok
    ) {
      return true;
    }
  }
  
  // Adjective comparative/superlative
  if (
    target + 'r' === cleanTok ||
    target + 'st' === cleanTok ||
    target + 'er' === cleanTok ||
    target + 'est' === cleanTok ||
    target.replace(/([^aeiou])y$/, '$1ier') === cleanTok ||
    target.replace(/([^aeiou])y$/, '$1iest') === cleanTok
  ) {
    return true;
  }

  return false;
}

export interface TextToken {
  text: string;
  isWord: boolean;
  isTarget: boolean;
  canonical?: string;
}

export function tokenizeText(text: string, targetWords: string[]): TextToken[] {
  const rawTokens = text.split(/(\b[\w'-]+\b)/g);
  const tokens: TextToken[] = [];
  
  const sortedTargets = [...targetWords].sort((a, b) => b.split(' ').length - a.split(' ').length);
  const targetTokensList = sortedTargets.map(t => ({
    canonical: t,
    parts: t.split(' ')
  }));

  let i = 0;
  while (i < rawTokens.length) {
    const token = rawTokens[i];
    
    if (/^[\w'-]+$/.test(token)) {
      let matchedPhrase = false;
      
      for (const target of targetTokensList) {
        if (target.parts.length > 1) {
          let match = true;
          let textAccumulator = token;
          let k = i;
          
          if (!isInflectionOf(rawTokens[k], target.parts[0])) {
            continue;
          }
          
          let nextPartIdx = 1;
          let advanceK = k + 1;
          
          while (nextPartIdx < target.parts.length && advanceK < rawTokens.length) {
            const nextRaw = rawTokens[advanceK];
            if (!/^[\w'-]+$/.test(nextRaw)) {
              if (/[^\s]/.test(nextRaw)) {
                 match = false;
                 break;
              }
              textAccumulator += nextRaw;
              advanceK++;
            } else {
              if (nextRaw.toLowerCase() !== target.parts[nextPartIdx].toLowerCase()) {
                 match = false;
                 break;
              }
              textAccumulator += nextRaw;
              nextPartIdx++;
              advanceK++;
            }
          }
          
          if (match && nextPartIdx === target.parts.length) {
            tokens.push({
              text: textAccumulator,
              isWord: true,
              isTarget: true,
              canonical: target.canonical
            });
            i = advanceK;
            matchedPhrase = true;
            break;
          }
        }
      }
      
      if (!matchedPhrase) {
        const canonicalMatch = sortedTargets.find(t => t.split(' ').length === 1 && isInflectionOf(token, t));
        tokens.push({
          text: token,
          isWord: true,
          isTarget: !!canonicalMatch,
          canonical: canonicalMatch || token
        });
        i++;
      }
    } else {
      tokens.push({
        text: token,
        isWord: false,
        isTarget: false
      });
      i++;
    }
  }
  return tokens;
}
