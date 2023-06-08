//declaring things/requiring things
const http = require('http');
const port = 5000;
const hostname = "127.0.0.1";
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const helmet = require('helmet')
const app = express();
const server = http.createServer(app);
const userRoute = require('./routes/user');
const itemRoute = require('./routes/item');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const userItemRoute = require('./routes/user-item')
const passport = require('passport');
const dotenv = require('dotenv').config()


//middlewares will go here
app.use(express.json());
app.use(helmet());
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
app.use(userRoute);
app.use(itemRoute);
app.use(loginRoute);
app.use(registerRoute);
app.use(userItemRoute);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
