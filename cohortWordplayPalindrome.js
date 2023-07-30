// What is the longest palindrome?

const fs = require('fs');

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function findLongestPalindrome(text) {
  const words = text.split(/\s+/);
  const palindromes = words.filter((word) => isPalindrome(word));
  if (palindromes.length === 0) {
    return null;
  }
  return palindromes.reduce((longest, current) => (current.length > longest.length ? current : longest));
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const longestPalindrome = findLongestPalindrome(data);
  console.log('Longest palindrome:', longestPalindrome);
});
