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
        <>
        <div className="profile-container">
            <img src="../images/generic-profile.png" />
            <h3>{data[0]?.username}</h3>
        </div>
        <div className="bio-div">
            <h3>Your bio!</h3>
        </div>
        </>
    )
}

export default User;