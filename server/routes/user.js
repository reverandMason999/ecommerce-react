const express = require('express');
const router = express.Router();
const { User } = require('../models')

router.get('/user', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
});
 //could do a post that searches for a user by username for a search bar
router.get('/user/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.json(user)
});


//delete a user's account
router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id,
        }
    });
    res.json(deletedUser);
});

//this will update a user by sending their input as the request body, we could hook this up to an edit account form
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