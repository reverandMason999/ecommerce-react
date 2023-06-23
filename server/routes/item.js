const express = require('express');
const router = express.Router();
const { Item } = require('../models');
const fs = require('fs');
//I think these one's we mostly won't need, maybe the get requests to display the items on an explore page or maybe the home page
router.get('/item', async (req, res) => {
    const items = await Item.findAll()
    res.json(items)
});

router.get('/item/:id', async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByPk(req.params.id)
    res.json(item)
});
//we can use this route to search by category
router.get('/item/:category', async (req, res) => {
    const { category } = req.params
    try{
        const items = await Item.findAll({where: { category }})
        if(items.length === 0) {
            res.status(404).json({message: `No items were found in ${category}`})
        } else {
            res.json(items)
        } 
    } catch (err) {
        res.status(500).json({ message: 'invalid!'})
    }
    
});


const saveImage = (file, path) => {
    fs.writeFile(path, file.data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Image saved successfully!');
      }
    });
  };
  
  router.post('/item', async (req, res) => {
    const { name, category, price, description, img, userId } = req.body;
    // const file = req.files.img;
    // const filePath = `/client/public/images/${file.name}`;
    
    // saveImage(file, filePath); 
    
    const newItem = await Item.create({
      name,
      category,
      price,
      description,
      img,
      userId
    });
    
    res.json(newItem);
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