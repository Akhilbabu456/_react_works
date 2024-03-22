import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,
         Routes,
         Route } from 'react-router-dom';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
      <Shop/>
      </div>
    </Router>
  );
}

export default App;
