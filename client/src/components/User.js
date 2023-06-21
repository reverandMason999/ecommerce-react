import { useEffect, useState } from "react";
import axios from "axios";
import './User.css'


const User = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/user').then(res => {
            console.log(res)
            setData(res.data)})
        .catch(err => console.log(err))
    }, [])
    return(

        <div className="profile-container">
            <img src="../images/generic-profile.png" />
            <h2>{data[0]?.username}</h2>
        </div>
    )
}

export default User;