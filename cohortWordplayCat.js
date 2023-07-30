// What are all of the words that contain the word CAT and are exactly 5 letters long?


const fs = require('fs');

function findWordsContainingCATAndLength5(text) {
  const words = text.split(/\s+/);
  const wordsContainingCATAndLength5 = words.filter((word) => /CAT/i.test(word) && word.length === 5);
  return wordsContainingCATAndLength5;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsContainingCATAndLength5 = findWordsContainingCATAndLength5(data);
  console.log(wordsContainingCATAndLength5);
});
