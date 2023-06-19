import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
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
  });
  
}
  return (
    <div className="register-card" >
        <h3>Register now!</h3>
            <form method='post'  onSubmit={handleSubmit} className="registration-form" >
                <label>username:</label>
                <input type='text' value={state.username} name="username" placeholder="username" onChange={handleChange}/>
                <label>email:</label>
                <input type ='text' value={state.email} name="email"  placeholder="email" onChange={handleChange}/>
                <label>password:</label>
                <input type='password' value ={state.password} name="password" placeholder="password" onChange={handleChange}/>
                <button type="submit">submit</button>
            </form>
        </div>
  )
}

export default SignUp