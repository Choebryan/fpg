import ResponsiveAppBar from './components/appBar';
// import './styles.css';
import videoBg from '../assets/tiger.mp4';
import ContactInfo from './components/contactInfo';
import Testimonials from './components/testimonials';
import OneLesson from './components/oneLesson';
import LessonPackage from './components/lessonPackage';

const Home = () => {
  return (
    <div className='home' style={{ overflow: 'scroll' }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className='video-container'>
        <video className='video-bg' autoPlay muted loop>
          <source src={videoBg} type='video/mp4' />
          Your Video Did Not Load.
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>honest golf coach</h1>
          <p>Your Friendly Neighborhood Golf Coach Here to Help You</p>
          <a href='#' className='btn-book'>
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
