import { useState, useEffect } from "react";
import axios from 'axios';
import Itemcard from "./Itemcard";
import Checkout from "../../pages/Checkout/Checkout";
import './itemlist.css'


const Itemlist = ({ items }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/item').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])
    return(
        <div className='item-list-container'>
            <h1 className='item-title'>Newest items for sale!</h1>
            <div className='item-list'>
               {data.map(item => (
                <>
                <Itemcard items ={item} key={item.id} />
                <div hidden><Checkout price ={item.price}/> </div>
                </>
               ))} 
            </div>
        </div>
    )
}

export default Itemlist;
 

