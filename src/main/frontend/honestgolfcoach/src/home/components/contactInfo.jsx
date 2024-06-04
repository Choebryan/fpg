import React from 'react';
import logo from '../../assets/h_green192.png';

const ContactInfo = () => {
  return (
    <footer className='footer p-10 bg-base-200 text-base-content'>
      <aside className='flex flex-col items-center'>
        <img
          className='mb-2'
          src={logo}
          alt='Logo'
          width='60'
          height='60'></img>
        <p className='text-lg'>Honest Golf Coach</p>
        <p className='text-sm'>Your Friendly Neighborhood Golf Coach</p>
      </aside>
      <nav>
        <h6 className='footer-title'>Contact</h6>
        <a className='link link-hover' href='tel+12137159351'>
          (213) 715-9351
        </a>
        <a className='link link-hover'>Email</a>
        <a
          className='link link-hover'
          href='https://www.instagram.com/honestgolfcoach/?hl=en'>
          Instagram
        </a>
      </nav>
      <nav>
        <h6 className='footer-title'>Location</h6>
        <a
          className='link link-hover text-left'
          href='https://maps.app.goo.gl/rCC21CoAytZKa4VX8'>
          3600 W. Ramona Blvd.,
          <br />
          Monterey Park, CA 91754
        </a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
        <a className='link link-hover'>Press kit</a>
      </nav>
      <nav>
        <h6 className='footer-title'>Hours</h6>
        <a className='link link-hover'>Terms of use</a>
        <a className='link link-hover'>Privacy policy</a>
        <a className='link link-hover'>Cookie policy</a>
      </nav>
    </footer>
  );
};

export default ContactInfo;
