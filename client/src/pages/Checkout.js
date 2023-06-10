import React from 'react'
import StripeContainer from '../components/StripeContainer'
import { useState } from 'react'
import "./Checkout.css"

const Checkout = () => {
  const [showItem, setShowItem] = useState(false)
  return (
    <div>

    <h1>Checkout</h1>
    {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <button onClick={() => setShowItem(true)}>Purchase Item</button> </>}
    </div>
  )
}

export default Checkout