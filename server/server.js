//declaring things/requiring things
const http = require('http');
const port = 5000;
const hostname = "127.0.0.1";
const express = require('express');
const cors = require('cors');
const session = require('express-session')
const app = express();
const server = http.createServer(app);
const userRoute = require('./routes/user')
const itemRoute = require('./routes/item')
const loginRoute = require('./routes/login')
const passport = require('passport')
const dotenv = require('dotenv').config()


//middlewares will go here
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());




// eventually the paths to our routes will live here
app.get('/', (req, res) => {
  res.json({message: 'it worked!'})
});
app.use(userRoute);
app.use(itemRoute);
app.use(loginRoute);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
