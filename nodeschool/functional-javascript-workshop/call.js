function duckCount(...args) {
  return args
    .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack'))
    .length;
}

module.exports = duckCount;
