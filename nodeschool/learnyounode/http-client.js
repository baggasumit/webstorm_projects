const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
  response.on('end', () => {
    console.log('it ended');
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
