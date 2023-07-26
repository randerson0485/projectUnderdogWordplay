const fs = require('fs');

function findWordsContainingQNotU(text) {
  const words = text.split(/\s+/);
  const wordsContainingQNotU = words.filter((word) => /Q/i.test(word) && !/U/i.test(word));
  return wordsContainingQNotU;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsContainingQNotU = findWordsContainingQNotU(data);
  console.log(wordsContainingQNotU);
});
