const fs = require('fs');

const bufferObj = fs.readFileSync(process.argv[2]);

const count = bufferObj.toString().split('\n').length - 1;
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(count);