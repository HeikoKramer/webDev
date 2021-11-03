const http   = require('http');
const handle = require('./handle');

const server = http.createServer(handle);

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
