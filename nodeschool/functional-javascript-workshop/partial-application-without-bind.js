function logger(namespace) {
  return function (...args) {
    console.log(namespace, ...args);
  };
}

module.exports = logger;
