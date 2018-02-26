const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // request handling logic...
  const readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(res);
});

server.listen(Number(process.argv[2]));
