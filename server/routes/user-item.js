const express = require('express');
const router = express.Router();
const{User, Item} = require('../models')
//these are the routes we can associate users and items with

router.get('/user/item/:userId', async (req, res) => { 
    const { userId } = req.params;
    const items = await Item.findAll({
      where: { userId },
      include: [{ model: User }],
    });
    res.json(items);
  });

router.post('/user/item/:userId', async (req, res) => {
    const { userId } = req.params;
    const { name, category, price } = req.body;

    try {
        const user = await User.findByPk(userId);
        if(!user) { 
            return 
        }
        const item = await Item.create({
            name,
            category,
            price,
        });
        res.status(201).json(item)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
    });

    
module.exports = router;