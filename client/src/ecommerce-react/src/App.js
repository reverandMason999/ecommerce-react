import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
    </div>
  );
}

export default App;
.