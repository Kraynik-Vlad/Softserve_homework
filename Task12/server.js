const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>Server Information</title>
      </head>
      <body>
        <h1>Server Information</h1>
        <p>Hostname: ${hostname}</p>
        <p>Operating System: ${osType}</p>
        <p>Uptime (minutes): ${uptime}</p>
        <p>Current Directory: ${currentDir}</p>
        <p>Server Filename: ${serverFilename}</p>
      </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Server is running at http://localhost:5000/');
});