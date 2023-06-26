import React from 'react'
import "../../components/Item/Itemcard"
import Itemlist from '../../components/Item/Itemlist'
import TopBar from '../../components/TopBar/TopBar'

const Buy = ({ items }) => {
  return (
  <>
  <TopBar />
  <Itemlist items={items} />
  </>
  )
}

export default Buy