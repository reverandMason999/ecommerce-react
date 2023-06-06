import React from "react";
import { useNavigate } from 'react-router-dom';
import Search from "../components/Search";
const Home = () => {
const handledropdown = (event) => {
  console.log(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/login')}> Login </button>
    </div>
  );
};

export default Home;