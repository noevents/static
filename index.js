const static = require('node-static');

const port = process.env.PORT || 8080
const file = new static.Server({headers: {
  'Access-Control-Allow-Origin': 'https://noevents.github.io',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': 'Content-Type'
}});

require('http').createServer(function (request, response) {
  file.serve(request, response);
}).listen(port);
console.log(`Server running on port ${port}`);