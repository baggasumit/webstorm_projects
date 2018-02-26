const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      console.log(err);
    } else {
      const dataStr = data.toString();
      console.log(dataStr.length);
      console.log(dataStr.toString());
    }
  }));
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
