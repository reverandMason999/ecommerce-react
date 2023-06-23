import { useState } from "react";
import React from "react";
import Itemcard from "./Itemcard";
import { Card } from "react-bootstrap";

const Itemlist = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/item').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])

}
 
return Itemlist.length (
    // <Card>
    //     <
    // </Card>
)
