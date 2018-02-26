function reduce(arr, fn, initial) {
  if (arr.length < 1) return initial;
  const retValue = fn(initial, arr[0]);
  return reduce(arr.slice(1), fn, retValue);
}

module.exports = reduce;
