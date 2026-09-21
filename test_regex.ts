const text = "Она получила награду за превосходную расследовательскую журналистику.";
const rawTokens = text.split(/(\b[\w'-]+\b)/g);
console.log(rawTokens);
