// What are all of the words containing an X and a Y and a Z?
const fs = require('fs');

function findWordsContainingXYZ(text) {
  const words = text.split(/\s+/);
  const wordsContainingXYZ = words.filter((word) => word.includes("X") && word.includes("Y") && word.includes("Z"));
  return wordsContainingXYZ;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsContainingXYZ = findWordsContainingXYZ(data);
  console.log(wordsContainingXYZ);
});
