import { useState, useEffect } from "react";
import axios from 'axios';
import Itemcard from "./Itemcard";



const Itemlist = ({ items }) => {
    // const [item, setItem] = useState([]);
    useEffect(() => {
        axios.get('/item').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])
    const renderItems = () => {
        return items.length ? (
            <div className='user-list'>
                {item.map((item) => <Itemcard item={item} key={items.id} />)}
            </div>
        ) : (
            <div>no users</div>
        )
    }
    return(
        <div className='item-list-container'>
            <h1 className='item-title'>Newest items for sale!</h1>
            <div className='item-list'>
                {renderItems}
            </div>
        </div>
    )
}

export default Itemlist;
 

