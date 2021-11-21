const http = require('http');

const todos = [
  { id: 1, text: 'ToDo One'},
  { id: 2, text: 'ToDo Two'},
  { id: 3, text: 'ToDo Three'}
];

const successfullResponse = JSON.stringify({
  success: true,
  data: todos
});

const nullResponse = JSON.stringify({
  success: false,
  error: 'Not Found',
  data: null
});

const server = http.createServer((req, res) => {
  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  });

  res.end(nullResponse);
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));