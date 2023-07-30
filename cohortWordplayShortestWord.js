// What is the shortest word that contains all 5 vowels?

const fs = require('fs');

function hasAllVowels(word) {
  return /A/i.test(word) && /E/i.test(word) && /I/i.test(word) && /O/i.test(word) && /U/i.test(word);
}

function findShortestWordWithAllVowels(text) {
  const words = text.split(/\s+/);
  const wordsWithAllVowels = words.filter((word) => hasAllVowels(word));
  if (wordsWithAllVowels.length === 0) {
    return null;
  }
  return wordsWithAllVowels.reduce((shortest, current) => (current.length < shortest.length ? current : shortest));
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const shortestWordWithAllVowels = findShortestWordWithAllVowels(data);
  console.log('Shortest word containing all five vowels:', shortestWordWithAllVowels);
});
