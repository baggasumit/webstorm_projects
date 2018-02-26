function countWords(inputWords) {
  return inputWords.reduce((wordCount, word) => {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
    return wordCount;
  }, {});
}

module.exports = countWords;
