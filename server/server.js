const http = require('http');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
require('dotenv').config({ path: '../.env' });

const userRoute = require('./routes/user');
const itemRoute = require('./routes/item');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const paymentRoute = require('./routes/Payment');
const userItemRoute = require('./routes/user-item');

const app = express();
const server = http.createServer(app);

const port = 5000;
const hostname = '127.0.0.1';

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(
  cors({
    origin: ['http://localhost:3000/checkout', "https://checkout.stripe.com"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.options('*', cors()); // Enable pre-flight requests for all routes
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(userRoute);
app.use(itemRoute);
app.use(loginRoute);
app.use(registerRoute);
app.use(paymentRoute);
app.use(userItemRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
