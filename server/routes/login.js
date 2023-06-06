const express = require('express');
const router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({where: { username }}).catch((err) => {
        console.log(err)
    })
    if(user) {
        const result = await bcrypt.compare(password, user.password)
        
        if(result){
   
        req.session.user = user
        req.session.authorized = true;
        res.json({message: 'you are logged in!'});
        }
    }
    
})

router.post('/logout', async (req, res) => {
    req.logOut();
})

module.exports = router;