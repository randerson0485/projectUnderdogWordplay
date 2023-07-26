const fs = require('fs');

function hasConsecutiveLetters(word) {
  return /([A-Z])\1/i.test(word);
}

function findWordsWithoutConsecutiveLetters(text) {
  const words = text.split(/\s+/);
  const wordsWithoutConsecutiveLetters = words.filter((word) => !hasConsecutiveLetters(word));
  return wordsWithoutConsecutiveLetters;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsWithoutConsecutiveLetters = findWordsWithoutConsecutiveLetters(data);
  console.log(wordsWithoutConsecutiveLetters);
});
