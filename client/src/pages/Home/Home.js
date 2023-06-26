import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
      </header>
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
