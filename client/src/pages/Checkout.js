import React from 'react'
import StripeContainer from '../components/StripeContainer'
import { useState } from 'react'
import "./Checkout.css"
import { useLocation } from 'react-router-dom'
import TopBar from '../components/TopBar'

const Checkout = () => {
  const [showItem, setShowItem] = useState(false)
  const location = useLocation()
  const price = location.state && location.state.price
  return (
    <div>
<>
<TopBar/>
    <h1>Checkout</h1>
    {showItem ? <StripeContainer/> : <> <h3>${price}</h3> <button className='Checkoutbutton' onClick={() => setShowItem(true)}>Purchase Item</button> </>}
    </>
    </div>
  )
}

export default Checkout