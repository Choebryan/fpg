import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import GentyDemo from '../../assets/GentyDemo-Regular.otf';
import Home from '../home';
import styles from './NavBar.module.css';
import { Menu, X } from 'lucide-react'; 
import { GoogleLogin } from '@react-oauth/google';
import GoogleLoginButton from './GoogleLoginButton';


const NavLinks = () => {
  return (
    <>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/lessons'>Lessons</NavLink>
      <NavLink to='/location'>Location</NavLink>
      <GoogleLoginButton/>

    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header
      className={`sticky top-0 z-50 ${styles.green} mx-auto flex flex-wrap w-full items-center justify-between p-1 text-white`}
      id='navbar'>
      <nav className='flex items-center'>
        <NavLink
          to='/'
          className='pt-2 pl-4 text-4xl font-bold cursor-pointer font-[GentyDemo]'>
          h.
        </NavLink>
      </nav>
      <nav className='w-1/5 flex justify-end pr-4 mb-1'>
        <div className='hidden md:flex justify-between w-full space-x-4'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
            <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex basis-full flex-col items-center'>
            <NavLinks />
        </div>
      )}
    </header>
  );
};

export default NavBar;
