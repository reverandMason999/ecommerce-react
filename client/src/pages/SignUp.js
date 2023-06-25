import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import TopBar from '../components/TopBar';





const SignUp = ({newUser}) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    username: '',
    email:'',
    password:''
});

const handleChange = (e) => {
  const value = e.target.value;
  setState({
      ...state,
      [e.target.name]: value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  const userData = {
      username: state.username,
      email: state.email,
      password: state.password
  };
  axios.post('/register', userData, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
      console.log(res.data)
      newUser(res.data)
  });
  navigate('/Login')
  
}
  return (
    <>
    <TopBar />
    <div className="register-card" >
        <h1>Register now!</h1>
            <form method='post'  onSubmit={handleSubmit} className="registration-form" >
              
                <input type='text' value={state.username} name="username" placeholder="username" onChange={handleChange}/>
                
                <input type ='text' value={state.email} name="email"  placeholder="email" onChange={handleChange}/>
                
                <input type='password' value={state.password} name="password" placeholder="password" onChange={handleChange}/>
                <button className="register-btn" type="submit">submit</button>
            </form>
        </div>
      </>
  )
}

export default SignUp