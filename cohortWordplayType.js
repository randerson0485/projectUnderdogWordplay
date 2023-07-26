const fs = require('fs');

function countWordsWithSubstring(text, substring) {
  const words = text.split(/\s+/);
  const count = words.reduce((total, word) => total + (word.toUpperCase().includes(substring.toUpperCase()) ? 1 : 0), 0);
  return count;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const substring = 'TYPE';
  const countWordsWithTypeSubstring = countWordsWithSubstring(data, substring);
  console.log('Number of words containing the substring "TYPE":', countWordsWithTypeSubstring);
});
