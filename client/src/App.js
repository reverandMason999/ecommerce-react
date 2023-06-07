import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
        <Banner/>
        <Categories/>
    </div>
  
  );
}

export default App;
