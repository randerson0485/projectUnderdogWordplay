// What are all of the words that have no E or A and are at least 15 letters long?


const fs = require('fs');

function findWordsLength15OrMoreWithoutEAndA(text) {
  const words = text.split(/\s+/);
  const wordsLength15OrMoreWithoutEAndA = words.filter((word) => word.length >= 15 && !/[EA]/i.test(word));
  return wordsLength15OrMoreWithoutEAndA;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsLength15OrMoreWithoutEAndA = findWordsLength15OrMoreWithoutEAndA(data);
  console.log(wordsLength15OrMoreWithoutEAndA);
});
