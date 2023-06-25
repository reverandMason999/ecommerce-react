import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import TopBar from "../components/TopBar";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    password: ''
})
const handleChange = (e) => {
    const value = e.target.value;
    setState({
        ...state,
        [e.target.name]: value
    });
}
const handleSubmit = (e) => {
  e.preventDefault();
  const userData = {
      username: state.username,
      password: state.password
  };
  axios.post('/login', userData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
      console.log(response.data)
  });
  navigate('/Profile')

}
  return (
    <>
    <TopBar />
    <div className="login-card">
    <h1>login here!</h1>
        <form className='login-form' onSubmit={handleSubmit}>
        <input name='username' placeholder='username' value={state.username} onChange={handleChange} />
        <input name='password' type='password' placeholder='password' value={state.password} onChange={handleChange} />
        <button className='btn' type='submit'>submit</button>
        <h3>or</h3>
        </form>
         <Link to={'/SignUp'}>Register here!</Link>
        </div>
        </>
  )
}

export default Login