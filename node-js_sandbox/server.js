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
  const { method, url } = req;
  let body = [];

  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    let status = 404;
    const response = {
      success: false,
      data: null,
      error: null
    }

    if(method === 'GET' && url === '/todos') {
      status = 200;
      response.success = true;
      response.data = todos;
    } else if(method === 'POST' && url === '/todos') {
      const { id, text } = JSON.parse(body);

      if(!id || !text) {
        status = 400;
        response.error = 'please add id and text';
      } else {
        todos.push({ id, text });
        status = 201;
        response.success = true;
        response.data = todos;
      }
    }
    
    res.writeHead(status, {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    });

    res.end(JSON.stringify(response));
  });
 
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));