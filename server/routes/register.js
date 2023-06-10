const express = require('express')
const router = express.Router()
const { User } = require('../models')
const rateLimit = require('express-rate-limit');

const registerLimit = rateLimit({
    windowMs: 25 * 60 * 1000, // 25 minutes
	max: 5, // Limit each IP to 5 account registrations
	message: 'Too many accounts created from this IP, please try again after 25 minutes',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, 
});

router.post('/register', registerLimit, async (req, res) => { 
    const { username, email, password } = req.body;
    const newUser = await User.create({
        username,
        email,
        password
    })
    res.json(newUser)
});

module.exports = router;