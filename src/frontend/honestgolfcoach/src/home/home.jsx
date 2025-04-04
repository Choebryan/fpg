import ResponsiveAppBar from './components/appBar';
// import './styles.css';
import videoBg from '../assets/tiger.mp4';
import ContactInfo from './components/contactInfo';
import Testimonials from './components/testimonials';
import OneLesson from './components/oneLesson';
import LessonPackage from './components/lessonPackage';
import NavBar from './components/NavBar';

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleBookNow = () => {
     if (isLoggedIn) {
      navigate('/lessons');
     } else {
      navigate('/signup');
     }
  }


  return (
    <div className='home bg-white' style={{ overflow: 'scroll' }}>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <NavBar></NavBar>
      <div className='video-container'>
        <video className='video-bg' autoPlay muted loop>
          <source src={videoBg} type='video/mp4' />
          Your Video Did Not Load.
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>honest golf coach</h1>
          <p>Your Friendly Neighborhood Golf Coach Here to Help You</p>
          <a 
            href="https://book.squareup.com/appointments/lww99gsei0kaiy/location/LWTY0GRAGER8N/services"
            target="_blank"
            rel="noopener noreferrer"
            className='btn-book'
          >
            Book Now
          </a>
        </div>
      </div>
      <OneLesson></OneLesson>
      <LessonPackage></LessonPackage>
      <Testimonials></Testimonials>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
