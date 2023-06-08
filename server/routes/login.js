const express = require('express');
const passport = require('../auth/passport');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const loginLimit = rateLimit({
    windowMs: 30 * 60 * 1000, 
	max: 6, 
	message: 'Too many unsuccessful login attempts, please try again after 25 minutes',
	standardHeaders: true, 
	legacyHeaders: false,
})

router.post('/login', loginLimit, passport.authenticate('local', { failureRedirect: '/login-failure' }), (req, res) => {
    res.json(req.user);  //req.user is the logged in user info on the session object
  });
  
  router.post('/logout', (req, res) => {
    // req.logout();
    req.session.destroy((err) => {
      if (err) {
        console.log('Error logging out:', err);
        return res.status(500).send('Error logging out');
      }
      res.send('Logged out successfully');
    });
  });
  
module.exports = router;