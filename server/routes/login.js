const express = require('express');
const router = express.Router();
const { User } = '../models'

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({where: { username }}).catch((err) => {
        console.log(err)
    })
    if(user) {
        const matchPassword = await bcrypt.compare(password, user.password)
    }
    if(matchPassword) {
        req.session.user = user
        req.session.authorized = true;
    }
})

router.post('/logout', async (req, res) => {
    req.logOut();
})

module.exports = router;