const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Hello world');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running...');
});
