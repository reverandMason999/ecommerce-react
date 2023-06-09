const express = require("express");
const router = express.Router();
const { User, Item } = require("../models");
const isAuth = require('../auth/authMiddleware').isAuth
//these routes associate items created by users
//the isAuth middleware only allows the user to make calls to these routes 
//so definitely make sure a user's logged in before testing

router.get("/user/item/:userId", async (req, res) => {
  const { userId } = req.params;
  const items = await Item.findAll({
    where: { userId },
    include: [{ model: User }],
  });
  res.json(items);
});

//this route creates a listing associated with the user who created it, we could attach this to a form on the user's profile page or the sell page.
router.post("/user/item/:userId", isAuth, async (req, res) => {
  const { userId } = req.params;
  const { name, category, price, description, img } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return;
    }
    const item = await Item.create({
      name,
      category,
      price,
      description,
      img,
      userId

    });
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
// this updates a user's listing
router.put("/user/:userId/item/:id", isAuth, async (req, res) => { 
  const { userId, id } = req.params;
  const user = await User.findByPk(userId);
  if (!user) return res.status(404).json({ error: "User not found" });
  const updatedItem = await Item.update(req.body, {
    where: {
      userId,
      id,
    },
  });
  res.json(updatedItem);
});
//this delete's a user's item, maybe we can add a little trash button that calls to this route
router.delete("/user/:userId/item/:id", isAuth,async (req, res) => {
  const { userId, id } = req.params;
  const user = await User.findByPk(userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  const deletedItem = await Item.destroy({
    where: {
      id,
    },
  });
  res.json(deletedItem);
});

module.exports = router;
