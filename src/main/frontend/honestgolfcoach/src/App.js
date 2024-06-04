import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './home/components/appBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home/home';
import Lessons from './home/lessons';

function App() {
  return (
    <Routes>
      {/* <div className='App'> */}
      <Route path='/' element={<Home />} />
      <Route path="lessons" element={<Lessons />}/>
      {/* </div> */}
    </Routes>
  );
}

export default App;
