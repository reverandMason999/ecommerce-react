import React from "react";
import { useNavigate } from 'react-router-dom';
import Search from "./Search";
const Home = () => {
  const handledropdown = (event) => {
    console.log(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <div>
      <select onChange= {handledropdown}>
        <option value= 'electronics'> electronics </option>
        <option value='cosmetics'> cosmetics </option>
        <option value='clothing'> clothing </option>
        <option value='jewelery'> jewelery </option>
        <option value='furniture'> furniture </option>
      </select>
      <Search/>
      <button onClick={() => navigate('/login')}> Login </button>

    </div>
  );
};

export default Home;