const fs = require('fs');

function findWordsContainingUU(text) {
  const words = text.split(/\s+/);
  const wordsContainingUU = words.filter((word) => word.includes("UU"));
  return wordsContainingUU;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsContainingUU = findWordsContainingUU(data.toUpperCase()); 
  console.log(wordsContainingUU);
});
