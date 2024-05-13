import ResponsiveAppBar from './components/appBar';
// import './styles.css';
import videoBg from '../assets/tiger.mp4';
import ContactInfo from './components/contactInfo';
import Testimonials from './components/testimonials';

const Home = () => {
  return (
    <div className='home' style={{ overflow: "scroll" }}>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div
        className='video-container'
        style={{ height: scrollY === 0 ? '100vh' : 'auto' }}>
        <video className='video-bg' autoPlay muted loop>
          <source src={videoBg} type='video/mp4' />
          Your Video Did Not Load.
        </video>
        <div className='overlay'></div>
      </div>
      
      <div className='content' style={{ height: '100vh'}}>
        <h1>honest golf coach</h1>
        <p>Your Friendly Neighborhood Golf Coach Here to Help You</p>
        <a href='#' className='btn-book'>
          Book Now
        </a>
      </div>
      <div className='info' style={{ height: '100vh' }}>
      </div>
      <Testimonials></Testimonials>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
