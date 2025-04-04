import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './home/components/appBar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home/home';
import BookLesson from './home/bookLesson';
import SignUp from './home/signUp';
import Booking from './home/components/Booking';
import MyLessons from './myAccount/myLessons';
import GoogleLoginButton from './home/components/GoogleLogin';
import dotenv from 'dotenv';
import { AuthContext } from './context/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         {/* <div className='App'> */}
//         <Route path='/' element={<Home />} />
//         <Route path='lessons' element={<BookLesson />} />
//         <Route path='signup' element={<SignUp />} />
//         <Route path='booking' element={<Booking />} />
//         <Route path='myLessons' element={<MyLessons />} />
//         {/* </div> */}
//       </Routes>
//     </AuthProvider>
//   );
// }


dotenv.config();


function App() {
  return (
      <GoogleOAuthProvider clientId={process.env.YOUR_GOOGLE_CLIENT_ID}>
          <AuthContext>
              <AppContent />
          </AuthContext>
      </GoogleOAuthProvider>
  );
}

function AppContent() {
  const { loading } = useAuth();

  if (loading) {
      return <div>Loading...</div>; // Show loading state while fetching user
  }

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<BookLesson />} />
              <Route path="/login" element={<GoogleLoginButton />} />
              <Route path="/booking" element={<Booking />} />
              {/* <Route path="/myLessons" element={
                  <ProtectedRoute component={MyLessons} requiredRole="user" />
              } />
              <Route path="/admin/dashboard" element={
                  <ProtectedRoute component={AdminDashboard} requiredRole="admin" />
              } /> */}
          </Routes>
      </Router>
  );
}


export default App;
