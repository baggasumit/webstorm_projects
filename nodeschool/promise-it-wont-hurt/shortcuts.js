// const promise = new Promise((fulfill, reject) => {
//   // Your solution here
//   // fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

const promise = Promise.reject(new Error('I DID NOT FIRE via Shortcut'));

function onRejected(error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
// promise.then(console.log, onRejected);
promise.catch(onRejected);

const shortPromise = Promise.resolve('I FIRED via Shortcut');

shortPromise.then(console.log);
