const http = require('http');
const url = require('url');

function parsetime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function unixtime(date) {
  return { unixtime: date.getTime() };
}

const server = http.createServer((req, res) => {
  let result;

  if (req.method !== 'GET') {
    return res.end('send me a GET\n');
  }

  const urlObj = url.parse(req.url, true);
  const date = new Date(urlObj.query.iso);

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(date);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(date);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]));
