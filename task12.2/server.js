let http = require('http');
let greeting = require('./personalmodule');
let os = require("os");

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  let userName = os.userInfo().username;

  res.write(`Date of request: ${greeting.date}<br>`);
  res.write(greeting.showMessage(userName));
  res.end();
}).listen(8000);

console.log('Сервер запущено на порту http://127.0.0.1:8000/');