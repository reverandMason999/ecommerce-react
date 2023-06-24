
import * as React from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Buy from "./pages/Buy";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import ProductSearch from "./pages/ProductSearch";
import Sell from "./pages/Sell";
import SignUp from "./pages/SignUp";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productsearch" element={<ProductSearch />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;