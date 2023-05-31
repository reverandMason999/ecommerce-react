const http = require('http');
const port = 5000;
const hostname = "127.0.0.1";

const express = require('express');
const app = express();
const server = http.createServer(app);
const cors = require('cors')
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
