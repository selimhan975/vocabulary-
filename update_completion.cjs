const fs = require('fs');

let ce = fs.readFileSync('src/components/quiz/QuizEngine.tsx', 'utf-8');
ce = ce.replace('onComplete(currentScore, maxScore);', 'onComplete(currentScore, maxScore, sessionMistakes);');
ce = ce.replace('onComplete: (score: number, max: number) => void;', 'onComplete: (score: number, max: number, sessionMistakes?: Record<string, number>) => void;');
fs.writeFileSync('src/components/quiz/QuizEngine.tsx', ce);

let cs = fs.readFileSync('src/components/lesson/CompletionStage.tsx', 'utf-8');
cs = cs.replace('onFinish: () => void;', 'onFinish: () => void;\n  sessionMistakes?: Record<string, number>;');
cs = cs.replace('export const CompletionStage: React.FC<CompletionStageProps> = ({ lesson, score, onFinish }) => {', 'export const CompletionStage: React.FC<CompletionStageProps> = ({ lesson, score, onFinish, sessionMistakes = {} }) => {');

const oldBlock = `            {needsReviewWords.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-amber-700 font-bold mb-2">Still learning:</h4>
                <div className="flex flex-wrap gap-2">
                  {needsReviewWords.map(wm => {
                    const w = lesson.words.find(word => word.id === wm.wordId);
                    return <span key={wm.wordId} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{w?.word}</span>;
                  })}
                </div>
              </div>
            )}`;

const newBlock = `            {needsReviewWords.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-amber-700 font-bold mb-4">Words needing review:</h4>
                <ul className="space-y-2">
                  {needsReviewWords.map(wm => {
                    const w = lesson.words.find(word => word.id === wm.wordId);
                    const mistakes = sessionMistakes[wm.wordId] || wm.incorrectAnswers || 0;
                    const mistakeText = mistakes === 1 ? '1 mistake' : \`\${mistakes} mistakes\`;
                    
                    return (
                      <li key={wm.wordId} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-medium text-slate-800">- {w?.word}</span>
                        <span className="text-slate-500 text-sm">— {mistakeText}</span>
                        {wm.state === 'UNRESOLVED' && (
                          <span className="text-red-500 text-xs font-bold uppercase ml-2 px-2 py-0.5 bg-red-50 rounded-full">
                            Review this word later
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}`;
cs = cs.replace(oldBlock, newBlock);
fs.writeFileSync('src/components/lesson/CompletionStage.tsx', cs);
