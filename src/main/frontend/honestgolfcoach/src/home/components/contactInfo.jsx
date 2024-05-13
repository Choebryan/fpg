import React from 'react';
import logo from '../../assets/h_green192.png'

const ContactInfo = () => {
  return (
    // <footer id="contact">
    //   <h2>Contact Us</h2>
    //   <p>If you have any questions or inquiries, feel free to reach out to us:</p>
    //   <ul>
    //     <li><a href="#home">Home</a></li>
    //     <li><a href="#about">About</a></li>
    //     <li><a href="#services">Services</a></li>
    //     <li><a href="#portfolio">Portfolio</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //   </ul>
    //   <p>Contact Information:</p>
    //   <p>Email: example@example.com</p>
    //   <p>Phone: 123-456-7890</p>
    // </footer>
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <aside>
        <img src={logo} alt="Logo" width="60" height="60"></img>
        <p>
          Honest Golf Coach
          <br />
          Your Friendly Neighborhood Golf Coach
        </p>
      </aside>
      <nav>
        <h6 className='footer-title'>Services</h6>
        <a className='link link-hover'>Branding</a>
        <a className='link link-hover'>Design</a>
        <a className='link link-hover'>Marketing</a>
        <a className='link link-hover'>Advertisement</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Company</h6>
        <a className='link link-hover'>About us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
        <a className='link link-hover'>Press kit</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Legal</h6>
        <a className='link link-hover'>Terms of use</a>
        <a className='link link-hover'>Privacy policy</a>
        <a className='link link-hover'>Cookie policy</a>
      </nav>
    </footer>
  );
};

export default ContactInfo;
