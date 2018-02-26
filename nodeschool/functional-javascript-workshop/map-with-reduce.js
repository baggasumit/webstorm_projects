module.exports = function arrayMap(arr, fn) {
  return arr.reduce((mappedArr, item) => {
    mappedArr.push(fn(item));
    return mappedArr;
  }, []);
};

