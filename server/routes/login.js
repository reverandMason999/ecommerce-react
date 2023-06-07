const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

router.post('/logout', async (req, res) => {
    req.logOut();
})

module.exports = router;