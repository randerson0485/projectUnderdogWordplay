// Create and print an array containing all of the words that end in "GHTLY"

const fs = require('fs');

function findWordsEndingIn(text, ending) {
  const words = text.split(/\s+/);
  const wordsEndingIn = words.filter((word) => new RegExp(ending + '$', 'i').test(word));
  return wordsEndingIn;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const ending = 'GHTLY';
  const wordsEndingInGHTLY = findWordsEndingIn(data, ending);
  console.log(wordsEndingInGHTLY);
});
