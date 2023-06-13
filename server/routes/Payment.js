const express = require("express");
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const cors = require('cors');
// Apply CORS middleware to the router
router.use(cors({ origin: ['http://localhost:3000'] }));
router.post('/payment', async (req, res) => {
  const { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: "ShopSavvy",
			payment_method_types: ['card'],
      confirm: true,
      payment_method: id
    });
    console.log('Payment', payment);
    res.json({
      message: 'Payment successful',
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: 'Payment failed',
      success: false
    });
  }
});
module.exports = router;
