function Spy(target, method) {
  const originalFunc = target[method];
  const result = { count: 0 };
  target[method] = function (...args) {
    result.count += 1;
    return originalFunc.call(this, ...args);
  };
  return result;
}

module.exports = Spy;
