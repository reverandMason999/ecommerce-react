const express = require ("express")
const router = express.Router();
require('dotenv').config()
const stripe = require ('stripe')(process.env.STRIPE_SECRET_TEST)





router.post('/payment', async (req, res) => {
    let {amount, id} = req.body 
    console.log(amount)
  
router.post('/payment', cors(), async (req, res) => {
    let { amount, id } = req.body 

    try {
      const payment = await stripe.paymentIntent.create({
        amount,
        currency: 'USD',
        description: "ShopSavvy",
        payment_method: id,
        confirm: true 
      })
      console.log('Payment', payment)
      res.json({
        message: 'Payment successful',
        success: true 
      })
    } catch (error) {
      console.log("Error", error)
      res.json({
        message: 'Payment failed',
        success: false
      })
      
    }
  })

  module.exports = router;