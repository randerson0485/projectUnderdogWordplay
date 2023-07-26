const fs = require('fs');

function findWordsWithoutVowels(text) {
  const words = text.split(/\s+/);
  const wordsWithoutVowels = words.filter((word) => !/[AEIOUY]/i.test(word));
  return wordsWithoutVowels;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsWithoutVowels = findWordsWithoutVowels(data);
  console.log(wordsWithoutVowels);
});
