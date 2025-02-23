const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error that is not caught
  process.exit(1);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});