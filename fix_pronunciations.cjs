const fs = require('fs');

const pronunciations = {
  // Lesson 41
  "anxiety": "/æŋˈzaɪ.ə.ti/",
  "sympathy": "/ˈsɪm.pə.θi/",
  "frustration": "/frʌsˈtreɪ.ʃən/",
  "eager": "/ˈiː.ɡər/",
  "hostile": "/ˈhɒs.taɪl/",
  "insecure": "/ˌɪn.sɪˈkjʊər/",
  "resent": "/rɪˈzent/",
  "content": "/kənˈtent/", // assuming it's the adjective/verb meaning 'satisfied' from translations
  "miserable": "/ˈmɪz.ər.ə.bəl/",
  "suspicious": "/səˈspɪʃ.əs/",

  // Lesson 42
  "campus": "/ˈkæm.pəs/",
  "faculty": "/ˈfæk.əl.ti/",
  "curriculum": "/kəˈrɪk.jə.ləm/",
  "thesis": "/ˈθiː.sɪs/",
  "seminar": "/ˈsem.ɪ.nɑːr/",
  "scholarship": "/ˈskɒl.ə.ʃɪp/",
  "tuition": "/tjuːˈɪʃ.ən/",
  "enroll": "/ɪnˈrəʊl/",
  "academic": "/ˌæk.əˈdem.ɪk/",
  "plagiarism": "/ˈpleɪ.dʒər.ɪ.zəm/",

  // Lesson 43
  "crop": "/krɒp/",
  "harvest": "/ˈhɑː.vɪst/",
  "livestock": "/ˈlaɪv.stɒk/",
  "soil": "/sɔɪl/",
  "cultivate": "/ˈkʌl.tɪ.veɪt/",
  "fertile": "/ˈfɜː.taɪl/",
  "pesticide": "/ˈpes.tɪ.saɪd/",
  "irrigation": "/ˌɪr.ɪˈɡeɪ.ʃən/",
  "grain": "/ɡreɪn/",
  "yield": "/jiːld/",

  // Lesson 44
  "election": "/ɪˈlek.ʃən/",
  "parliament": "/ˈpɑː.lə.mənt/",
  "legislation": "/ˌledʒ.ɪˈsleɪ.ʃən/",
  "minister": "/ˈmɪn.ɪ.stər/",
  "democracy": "/dɪˈmɒk.rə.si/",
  "campaign": "/kæmˈpeɪn/",
  "citizen": "/ˈsɪt.ɪ.zən/",
  "constitution": "/ˌkɒn.stɪˈtjuː.ʃən/",
  "mayor": "/meər/",
  "policy": "/ˈpɒl.ə.si/"
};

const targetFiles = [
  './src/data/b2-lesson-41.ts',
  './src/data/b2-lesson-42.ts',
  './src/data/b2-lesson-43.ts',
  './src/data/b2-lesson-44.ts'
];

let totalReplaced = 0;

for (const file of targetFiles) {
  let content = fs.readFileSync(file, 'utf-8');
  let replacedInFile = 0;
  
  // Find word blocks and replace /.../ with the mapped pronunciation
  content = content.replace(/word:\s*"([^"]+)",\s*pronunciation:\s*"\/\.\.\.\/"/g, (match, word) => {
    if (pronunciations[word]) {
      replacedInFile++;
      totalReplaced++;
      return `word: "${word}",\n      pronunciation: "${pronunciations[word]}"`;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Replaced ${replacedInFile} words in ${file}`);
}

console.log(`Total replaced: ${totalReplaced}`);
