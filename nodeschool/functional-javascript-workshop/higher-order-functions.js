function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i += 1) {
    operation();
  }
}

module.exports = repeat;
