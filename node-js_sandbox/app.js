const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('Hallo HTTP!');
  console.log(req.method);
  console.log(req.url);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
