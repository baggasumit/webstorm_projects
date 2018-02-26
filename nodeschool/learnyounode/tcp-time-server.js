const net = require('net');

function padZero(value) {
  return value < 10 ? `0${value}` : value.toString();
}

const server = net.createServer((socket) => {
  // socket handling logic
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(date.getMinutes())}\n`;
  socket.end(formattedDate);
});

server.listen(Number(process.argv[2]));
