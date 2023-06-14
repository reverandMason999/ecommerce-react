import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../components/Search";
import Account from "./Account";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
      </header>
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
