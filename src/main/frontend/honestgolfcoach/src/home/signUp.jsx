import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';

const signUp = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/signup',
        userData,
      );
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log('Error signing up: ', error);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className='container flex flex-col justify-center items-center h-screen max-w-lg w-full mx-auto'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <h1 className='text-xl font-bold flex justify-center'>
            Create Your Account
          </h1>
          <div className='border-b border-gray-300 w-full mb-4'></div>
          <div className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='firstName' className='w-1/2 mr-2'>
                First Name
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor='lastName' className='w-1/2 mr-2'>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
                <label htmlFor='email' className='w-1/2 mr-2'>Email</label>
                <input 
                    type='text'
                    name='email'
                    id='email'
                    className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='password' className='w-1/2 mr-2'>Password</label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signUp;
