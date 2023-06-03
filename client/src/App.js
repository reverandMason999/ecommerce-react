import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import TopBar from './components/TopBar';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";
import NewItem from "./pages/NewItem";
import Product from "./pages/Product";
import ProductSearch from "./pages/ProductSearch";
import Sell from "./pages/Sell";
import SignUp from "./pages/SignUp";


function App() {

  return (
    <> 
    <TopBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/newitem" element={<NewItem />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productsearch" element={<ProductSearch />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
