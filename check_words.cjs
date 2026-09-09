const existingWords = [
  "resilient", "implement", "maintain", "crucial", "evolve", "constant", "significant", "obtain", "adapt", "fulfill", 
  "symptom", "diagnose", "recover", "therapy", "fitness", "nutrition", "mental", "surgery", "immune", "hygiene", 
  "investment", "profit", "revenue", "expense", "currency", "debt", "consumer", "budget", "inflation", "corporation", 
  "destination", "commute", "vehicle", "passenger", "luggage", "delay", "reservation", "accommodation", "route", "overseas", 
  "broadcast", "coverage", "circulate", "credible", "verify", "controversial", "anonymous", "manipulate", "expose", "perceive", 
  "breakthrough", "sophisticated", "prototype", "sequence", "artificial", "revolutionary", "hypothesis", "predict", "simulate", "outcome", 
  "voluntary", "stereotype", "discrimination", "integration", "isolate", "conform", "prejudice", "vulnerable", "obligation", "awareness", 
  "dilemma", "compromise", "anticipate", "postpone", "allocate", "intervene", "consensus", "criteria", "justify", "tackle", 
  "legislation", "enforce", "sue", "penalty", "witness", "trial", "jury", "innocent", "accuse", "sentence", 
  "migration", "poverty", "treaty", "diplomat", "border", "famine", "crisis", "democratic", "corruption", "campaign", 
  "cognitive", "trigger", "bias", "conscious", "rational", "empathy", "impulse", "motivation", "instinct", "trait", 
  "innovative", "obsolete", "virtual", "access", "automated", "data", "device", "network", "process", "secure", 
  "catastrophe", "evacuate", "casualty", "devastate", "severe", "aftermath", "shelter", "hazard", "fatal", "deploy", 
  "construct", "architecture", "foundation", "renovate", "exterior", "interior", "dimension", "sturdy", "blueprint", "monument", 
  "rehearsal", "premiere", "script", "portray", "applause", "venue", "spectacle", "orchestra", "amateur", "audition", 
  "suspect", "evidence", "investigate", "witness", "commit", "detective", "guilty", "innocent", "trial", "verdict", 
  "orbit", "gravity", "launch", "astronaut", "universe", "satellite", "mission", "surface", "vacuum", "galaxy", 
  "illusion", "rational", "empathy", "bias", "intuition", "suppress", "cognitive", "mindset", "trauma", "instinct", 
  "forecast", "hurricane", "drought", "flood", "earthquake", "evacuate", "shelter", "devastate", "rescue", "severe", 
  "entrepreneur", "venture", "equity", "merge", "acquire", "sponsor", "monopoly", "enterprise", "investor", "corporate", 
  "nutrient", "calorie", "digest", "consume", "supplement", "organic", "obesity", "portion", "allergy", "vegetarian", 
  "purchase", "bargain", "receipt", "guarantee", "refund", "afford", "retail", "discount", "luxury", "transaction", 
  "delegate", "evaluate", "objective", "strategy", "productive", "capable", "resolve", "initiative", "negotiate", "priority", 
  "define", "category", "precise", "methodology", "conclude", "summarize", "logic", "accuracy", "illustrate", "context", 
  "promotion", "recruit", "qualification", "candidate", "interview", "resign", "dismiss", "colleague", "pension", "vacancy", 
  "facility", "pedestrian", "suburb", "resident", "district", "congestion", "communal", "landmark", "density", "vibrant", 
  "clarify", "convince", "perspective", "interact", "conflict", "interpret", "mutual", "barrier", "feedback", "acknowledge", 
  "diverse", "domestic", "infrastructure", "regulation", "sustain", "welfare", "proportion", "urban", "contemporary", "trend", 
  "analyze", "valid", "theory", "establish", "fundamental", "abstract", "concept", "assess", "framework", "investigate", 
  "emerge", "overcome", "consequence", "approach", "convert", "eliminate", "restore", "generation", "modify", "potential", 
  "emission", "preserve", "resource", "habitat", "endangered", "renewable", "impact", "atmosphere", "species", "alternative", 
  "heritage", "exhibit", "audience", "inspire", "literary", "visual", "compose", "traditional", "custom", "boundary"
];

const newWords = [
  // L33
  "promote", "target", "brand", "commercial", "persuade", "appeal", "slogan", "endorse", "loyalty", "demographic",
  // L34
  "tournament", "champion", "referee", "athlete", "stadium", "compete", "qualify", "spectator", "opponent", "defeat",
  // L35
  "ancient", "empire", "conquer", "civilization", "era", "artifact", "primitive", "dynasty", "revolt", "settlement",
  // L36
  "manufacture", "assemble", "factory", "distribution", "warehouse", "supply", "export", "import", "machinery", "inventory"
];

const duplicates = newWords.filter(w => existingWords.includes(w));
if (duplicates.length > 0) {
  console.log("DUPLICATES FOUND:", duplicates);
} else {
  console.log("ALL WORDS ARE UNIQUE.");
}
