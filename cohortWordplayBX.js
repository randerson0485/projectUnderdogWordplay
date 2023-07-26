const fs = require('fs');

function findWordsBXLessThan5Letters(text) {
  const words = text.split(/\s+/);
  const wordsBXLessThan5Letters = words.filter((word) => word.length < 5 && /B/i.test(word) && /X/i.test(word));
  return wordsBXLessThan5Letters;
}

fs.readFile('sowpods.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const wordsBXLessThan5Letters = findWordsBXLessThan5Letters(data);
  console.log(wordsBXLessThan5Letters);
});
