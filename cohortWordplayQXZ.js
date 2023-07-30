// Which of the letters Q, X, and Z is the least common?

const fs = require('fs');

function findLeastCommonLetters(text, lettersToFind) {
  const letterCount = {};

  // Initialize the letterCount object with the letters to find
  lettersToFind.forEach(letter => letterCount[letter] = 0);

  const words = text.split(/\s+/);

  // Count the occurrences of each letter in the words
  words.forEach(word => {
    word.split('').forEach(char => {
      const upperChar = char.toUpperCase();
      if (lettersToFind.includes(upperChar)) {
        letterCount[upperChar]++;
      }
    });
  });

  // Find the least common letters
  const leastCommonLetters = lettersToFind.filter(letter => letterCount[letter] === Math.min(...Object.values(letterCount)));

  return leastCommonLetters;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lettersToFind = ['Q', 'X', 'Z'];
  const leastCommonLetters = findLeastCommonLetters(data, lettersToFind);
  console.log('Least common letters:', leastCommonLetters);
});
