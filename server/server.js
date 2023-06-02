//declaring things/requiring things
const http = require('http');
const port = 5000;
const hostname = "127.0.0.1";
const express = require('express');
const cors = require('cors')
const app = express();
const server = http.createServer(app);
const userRoute = require('./routes/user')
const itemRoute = require('./routes/item')

//middlewares will go here
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );



// eventually the paths to our routes will live here
app.use(userRoute);
app.use(itemRoute);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
