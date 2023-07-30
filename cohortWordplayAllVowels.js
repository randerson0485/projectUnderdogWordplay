// What are all of the words that have all 5 vowels, in any order?

const fs = require('fs');

function hasAllVowels(word) {
  return /A/i.test(word) && /E/i.test(word) && /I/i.test(word) && /O/i.test(word) && /U/i.test(word);
}

function findWordsWithAllVowels(text) {
  const words = text.split(/\s+/);
  const wordsWithAllVowels = words.filter((word) => hasAllVowels(word));
  return wordsWithAllVowels;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsWithAllVowels = findWordsWithAllVowels(data);
  console.log(wordsWithAllVowels);
});
