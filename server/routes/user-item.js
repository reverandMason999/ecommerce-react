const express = require("express");
const router = express.Router();
const { User, Item } = require("../models");
//these routes associate items created by users

router.get("/user/item/:userId", async (req, res) => {
  const { userId } = req.params;
  const items = await Item.findAll({
    where: { userId },
    include: [{ model: User }],
  });
  res.json(items);
});

//this route creates a listing associated with the user who created it
router.post("/user/item/:userId", async (req, res) => {
  const { userId } = req.params;
  const { name, category, price } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return;
    }
    const item = await Item.create({
      name,
      category,
      price,
    });
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.put("/user/:userId/item/:id", async (req, res) => {
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

router.delete("/user/:userId/item/:id", async (req, res) => {
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
