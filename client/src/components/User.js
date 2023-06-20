import { useEffect, useState } from "react";
import axios from "axios";


const User = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/user').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])
    return(

        <div>
            <h2>hi! {data[0].username}</h2>
        </div>
    )
}

export default User;