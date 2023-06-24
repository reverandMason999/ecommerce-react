import React from 'react'
import "../components/Itemcard"
import Itemlist from '../components/Itemlist'

const Buy = ({ items }) => {
  return (
   <Itemlist items={items} />
  )
}

export default Buy