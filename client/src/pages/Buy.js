import React from 'react'
import "../components/Itemcard"
import Itemlist from '../components/Itemlist'
import TopBar from '../components/TopBar'

const Buy = ({ items }) => {
  return (
  <>
  <TopBar />
  <Itemlist items={items} />
  </>
  )
}

export default Buy