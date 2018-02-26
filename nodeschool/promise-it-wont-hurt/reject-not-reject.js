const promise = new Promise((fulfill, reject) => {
  // Your solution here
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
promise.then(console.log, onRejected);
