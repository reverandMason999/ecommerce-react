import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../components/Search";
import Account from "./Account";


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