import React from 'react';
import * as Yup from 'yup';

const loginSchema = Yup.object.shape({
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
});

const Login = () => {
    
    

  return (
    <div></div>
  )
}

export default Login