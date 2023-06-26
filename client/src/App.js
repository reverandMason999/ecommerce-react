
import * as React from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from './pages/Profile/Profile';
import Buy from "./pages/Buy/Buy";
import Checkout from "./pages/Checkout/Checkout";
import Sell from "./pages/Sell/Sell";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;