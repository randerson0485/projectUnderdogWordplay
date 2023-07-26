const fs = require('fs');

function hasAllVowelsInOrder(word) {
  return /A.*E.*I.*O.*U/i.test(word);
}

function findWordsWithAllVowelsInOrder(text) {
  const words = text.split(/\s+/);
  const wordsWithAllVowelsInOrder = words.filter((word) => hasAllVowelsInOrder(word));
  return wordsWithAllVowelsInOrder;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsWithAllVowelsInOrder = findWordsWithAllVowelsInOrder(data);
  console.log(wordsWithAllVowelsInOrder);
});
