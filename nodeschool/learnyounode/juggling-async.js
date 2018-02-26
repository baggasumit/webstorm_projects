const http = require('http');
const bl = require('bl');

let url;
const results = [];
let count = 0;

function readDataFromUrlRecursive(index) {
  if (index === process.argv.length) {
    // console.log('Done reading all urls!!');
  } else {
    url = process.argv[index];
    http.get(url, (response) => {
      response.pipe(bl((err, data) => {
        if (err) {
          console.log(err);
        } else {
          const dataStr = data.toString();
          // console.log(dataStr.length);
          console.log(dataStr.toString());
        }
        readDataFromUrlRecursive(index + 1);
      }));
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
    });
  }
}

function printResults() {
  for (let i = 0; i < 3; i += 1) {
    console.log(results[i]);
  }
}

function readDataFromUrl(index) {
  url = process.argv[2 + index];
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        console.log(err);
      } else {
        results[index] = data.toString();
        count += 1;

        if (count === 3) {
          printResults();
        }
      }
    }));
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

for (let i = 0; i < 3; i += 1) {
  readDataFromUrl(i);
}
