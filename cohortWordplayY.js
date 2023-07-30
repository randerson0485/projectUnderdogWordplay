// What are all of the words that both start and end with a Y?

const fs = require('fs');

function findWordsStartAndEndWithY(text) {
  const words = text.split(/\s+/);
  const wordsStartAndEndWithY = words.filter((word) => /^Y.*Y$/i.test(word));
  return wordsStartAndEndWithY;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsStartAndEndWithY = findWordsStartAndEndWithY(data);
  console.log(wordsStartAndEndWithY);
});
