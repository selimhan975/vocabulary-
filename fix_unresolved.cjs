const fs = require('fs');

let content = fs.readFileSync('src/engine/progress.ts', 'utf-8');

const oldBlock = `    if (updates.state) {
      wm.state = updates.state;
    } else if (wm.state !== 'MASTERED' && wm.state !== 'UNRESOLVED') {
      if (wm.incorrectAnswers > 0 && wm.correctAnswers < 2) {
        wm.state = 'NEEDS_REVIEW';
      } else if (wm.correctAnswers >= 2) {
        wm.state = 'MASTERED';
      } else {
        wm.state = 'PRACTICING';
      }
    }`;

const newBlock = `    if (updates.state) {
      wm.state = updates.state;
    } else if (wm.state !== 'MASTERED') {
      if (wm.incorrectAnswers > 0 && wm.correctAnswers < 2) {
        wm.state = 'NEEDS_REVIEW';
      } else if (wm.correctAnswers >= 2) {
        wm.state = 'MASTERED';
      } else {
        wm.state = 'PRACTICING';
      }
    }`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('src/engine/progress.ts', content);
