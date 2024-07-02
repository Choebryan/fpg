import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './home/components/appBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home/home';
import BookLesson from './home/bookLesson';
import { AuthProvider } from './AuthProvider';
import SignUp from './home/signUp';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <div className='App'> */}
        <Route path='/' element={<Home />} />
        <Route path='lessons' element={<BookLesson />} />
        <Route path='signup' element={<SignUp />} />
        {/* </div> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
