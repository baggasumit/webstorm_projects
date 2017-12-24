var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //var html = fs.readFileSync(__dirname + '/index.html');
  //res.end(html);
  //***These two above steps clubbed into one using stream and pipe
  fs.createReadStream(__dirname + '/index.html').pipe(res);
  //res.end('Hello World\nI will be there in a minute!');

}).listen(1337, '127.0.0.1');
