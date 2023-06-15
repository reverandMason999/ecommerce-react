const express = require('express')
const router = express.Router()
const { User } = require('../models')
const rateLimit = require('express-rate-limit');
const { check, validationResult } = require('express-validator');  

const registerLimit = rateLimit({
    windowMs: 25 * 60 * 1000, // 25 minutes
	max: 5, // Limit each IP to 5 account registrations
	message: 'Too many accounts created from this IP, please try again after 25 minutes',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, 
});

  
router.post('/register', registerLimit, [
    check('username', 'Username must be at least 5 characters').not().isEmpty(),
    check('email', 'Email must be valid').not().isEmpty().isEmail().normalizeEmail(),
    check('password', 'Password must be at least 5 characters').not().isEmpty().isLength({min: 5}).trim()
    ],async (req, res) => { 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(422).json({ errors: errors.array() }) 
            return
        }
        try{
        const { username, email, password } = req.body;
        const newUser = await User.create({
            username,
            email,
            password
        })
        res.json(newUser)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Server error" });
    }
        
    });
    
  

module.exports = router;