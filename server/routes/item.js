const express = require('express');
const router = express.Router();
const { Item } = require('../models');

router.get('/item', async (req, res) => {
    const items = await Item.findAll()
    res.json(items)
});

router.get('/item/:id', async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByPk(req.params.id)
    res.json(item)
});


router.put('/item/:id', async (req, res) => {
    const { id } = req.params;
    const updatedItem = await Item.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedItem);
});


router.delete('/item/:id', async (req, res) => {
    const { id } = req.params;
    const deletedItem = await Item.destroy({
        where: {
            id,
        }
    });
    res.json(deletedItem);
});
module.exports = router;