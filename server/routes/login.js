const express = require('express');
const passport = require('../auth/passport');
const router = express.Router();
const rateLimit = require('express-rate-limit');


const loginLimit = rateLimit({
    windowMs: 30 * 60 * 1000, 
	max: 6, 
	message: 'Too many unsuccessful login attempts, please try again after 30 minutes',
	standardHeaders: true, 
	legacyHeaders: false,
})
//for the login page, logs in the user into an authenticated session
router.post('/login', loginLimit, passport.authenticate('local', { failureFlash: true }), (req, res) => {
    res.json(req.user);  //req.user is the logged in user info on the session object
  });
//can post this to a logout button, will destroy the user's session
router.post('/logout', (req, res) => {

    req.session.destroy((err) => {
      if (err) {
        console.log('Error logging out:', err);
        return res.status(500).send('Error logging out');
      }
      res.send('Logged out successfully');
    });
  });
  
module.exports = router;