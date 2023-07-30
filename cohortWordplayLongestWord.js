// What is the longest word that contains no vowels?

const fs = require('fs');

function hasNoVowels(word) {
  return !/[AEIOUY]/i.test(word);
}

function findLongestWordWithoutVowels(text) {
  const words = text.split(/\s+/);
  const wordsWithoutVowels = words.filter((word) => hasNoVowels(word));
  if (wordsWithoutVowels.length === 0) {
    return null;
  }
  return wordsWithoutVowels.reduce((longest, current) => (current.length > longest.length ? current : longest));
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const longestWordWithoutVowels = findLongestWordWithoutVowels(data);
  console.log('Longest word containing no vowels:', longestWordWithoutVowels);
});
