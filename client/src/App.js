import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
     <h1> Shop Savvy </h1> 
     {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src='../public/Images/White Tee.jpeg' alt="White Tee" /><button onClick={() => setShowItem(true)}> Purchase White Tee </button></>}
        <TopBar/>
    </div>
  );
}

export default App;
