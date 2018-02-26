'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(() => fulfill('FULFILLED!'), 300);
});


// Your solution here
promise.then(console.log);

// const promise = new Promise((fulfill, reject) => {
//   // Your solution here
//   setTimeout(() => fulfill('FULFILLED!'), 300);
// });

// // Your solution here
// // promise.then((result) => {
// //   console.log(result);
// // });

// promise.then(console.log);