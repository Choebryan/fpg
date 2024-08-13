import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /(?=.*[A-Z])/,
      'Password must have at least one uppercase character',
    )
    .matches(
      /(?=.*[a-z])/,
      'Password must have at least one lowercase character',
    )
    .matches(/(?=.*[0-9])/, 'Password must have at least one number')
    .matches(
      /(?=.*[!@#\$%\^&\*])/,
      'Password must have at least one special character',
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUp = () => {
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

  const loginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className='bg-white'>
      <NavBar />
      <div className=' text-black container flex flex-col justify-center items-center h-screen max-w-lg w-full mx-auto'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              // const response = await axios.post(
              //   'http://localhost:8080/signup',
              //   values,
              // );
              // if (response.status === 200) {
              //   console.log('it worked');
              //   navigate('/');
              // }
              console.log('it worked');
            } catch (error) {
              console.log('Error signing up: ', error);
            } finally {
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, values, errors, touched }) => (
            <Form className='flex flex-col space-y-4'>
              <h1 className='text-xl font-bold flex justify-center'>
                Create Your Account
              </h1>
              <div className='border-b border-gray-300 w-full mb-4'></div>
              <div className='flex flex-col space-y-4'>
                <label htmlFor='firstName' className='w-1/2 mr-2'>
                  First Name
                </label>
                <Field
                  type='text'
                  name='firstName'
                  className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                />
                <ErrorMessage
                  name='firstName'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div>
                <label htmlFor='lastName' className='w-1/2 mr-2'>
                  Last Name
                </label>
                <Field
                  type='text'
                  name='lastName'
                  className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                />
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div>
                <label htmlFor='email' className='w-1/2 mr-2'>
                  Email
                </label>
                <Field
                  type='email'
                  name='email'
                  className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div>
                <label htmlFor='password' className='w-1/2 mr-2'>
                  Password
                </label>
                <Field
                  type='password'
                  name='password'
                  className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500'
                />
                {touched.password && (
                  <ul className='mt-2'>
                    <li
                      className={
                        values.password.length >= 8
                          ? 'text-green-500'
                          : 'text-red-500'
                      }>
                      At least 8 characters long
                    </li>
                    <li
                      className={
                        /(?=.*[A-Z])/.test(values.password)
                          ? 'text-green-500'
                          : 'text-red-500'
                      }>
                      At least one uppercase letter
                    </li>
                    <li
                      className={
                        /(?=.*[a-z])/.test(values.password)
                          ? 'text-green-500'
                          : 'text-red-500'
                      }>
                      At least one lowercase letter
                    </li>
                    <li
                      className={
                        /(?=.*[0-9])/.test(values.password)
                          ? 'text-green-500'
                          : 'text-red-500'
                      }>
                      At least one number
                    </li>
                    <li
                      className={
                        /(?=.*[!@#\$%\^&\*])/.test(values.password)
                          ? 'text-green-500'
                          : 'text-red-500'
                      }>
                      At least one special character
                    </li>
                  </ul>
                )}
              </div>

              <div>
                <label htmlFor='confirmPassword' className='w-1/2 mr-2'>
                  Confirm Password
                </label>
                <Field
                  type='password'
                  name='confirmPassword'
                  className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='btn mt-4 mx-auto w-full'>
                Sign Up
              </button>

              <div className='mt-4 flex justify-center items-center'>
                <span>Already have an account?</span>
                <button
                  type='button'
                  className='btn text-blue-500 ml-2'
                  onClick={() => navigate('/login')}>
                  Log In
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>

    //   <div>
    //     <NavBar></NavBar>
    //     <div className='container flex flex-col justify-center items-center h-screen max-w-lg w-full mx-auto'>
    //       <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
    //         <h1 className='text-xl font-bold flex justify-center'>
    //           Create Your Account
    //         </h1>
    //         <div className='border-b border-gray-300 w-full mb-4'></div>
    //         <div className='flex flex-col space-y-4'>
    //           <div>
    //             <label htmlFor='firstName' className='w-1/2 mr-2'>
    //               First Name
    //             </label>
    //             <input
    //               type='text'
    //               name='firstName'
    //               id='firstName'
    //               className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
    //               value={userData.firstName}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor='lastName' className='w-1/2 mr-2'>
    //               Last Name
    //             </label>
    //             <input
    //               type='text'
    //               name='lastName'
    //               id='lastName'
    //               className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
    //               value={userData.lastName}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor='email' className='w-1/2 mr-2'>
    //               Email
    //             </label>
    //             <input
    //               type='text'
    //               name='email'
    //               id='email'
    //               className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
    //               value={userData.email}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor='password' className='w-1/2 mr-2'>
    //               Password
    //             </label>
    //             <input
    //               type='password'
    //               name='password'
    //               id='password'
    //               className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
    //               value={userData.password}
    //               onChange={handleChange}
    //             />
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
  );
};

export default SignUp;
