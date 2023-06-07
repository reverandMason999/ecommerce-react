const express = require('express');
const router = express.Router();
const { User } = require('../models')

router.get('/user', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
});

router.get('/user/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
});


router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id,
        }
    });
    res.json(deletedUser);
});

router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedUser);
});

module.exports = router;