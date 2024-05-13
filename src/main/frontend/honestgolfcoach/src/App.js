import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './home/components/appBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home/home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Home></Home>
      </div>
    </Router>
  );
}

export default App;
