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
const paymentRoute = require('./routes/Payment')

//middlewares will go here
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );


  require('dotenv').config()
const stripe = require ('stripe')(process.env.STRIPE_SECRET_TEST)






  


// eventually the paths to our routes will live here
app.use(userRoute);
app.use(itemRoute);
app.use(paymentRoute);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
