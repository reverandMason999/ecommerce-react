import { useEffect, useState } from "react";
import axios from "axios";
import SignUp from "../pages/SignUp";
import User from "../components/User";


const User = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/user').then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    const newUser = (user) => {
        setData([...data, user])
    }
    return(
        <>
        <div>hi {user.username}</div>
        <SignUp newUser = {newUser} />
        </>
    )
}

export default User;