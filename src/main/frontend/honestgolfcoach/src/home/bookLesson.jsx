import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from './components/appBar';
import Input from 'react-phone-number-input/input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';

const bookLesson = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    lessonType: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlePhoneChange = value => {
    setFormValues({ ...formValues, phoneNumber: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        const response = await axios.post(
          'http://localhost:8080/submitForm',
          formValues,
        );
        setSubmissionSuccess(true);
      } catch (error) {
        console.error('There was an error sending the form!', error);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = values => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regex for email (has @ and .)

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!isPossiblePhoneNumber(values.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number entered';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'That is not a valid email format';
    }

    if (!values.lessonType) {
      errors.lessonType = 'Lesson type is required';
    }

    return errors;
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className='container flex flex-col justify-center items-center h-screen max-w-lg w-full mx-auto'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <h1 className='text-xl font-bold flex justify-center'>
            Book Your Lesson Now!
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
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p className='text-red-500'>{formErrors.firstName}</p>
            </div>
            <div>
              <label htmlFor='lastName' className='w-1/2 mr-2 '>
                Last Name
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className='text-red-500'>{formErrors.lastName}</p>
            </div>
            <div>
              <label htmlFor='phoneNumber' className='w-1/2 mr-2 '>
                Phone Number
              </label>
              <Input
                type='tel'
                name='phoneNumber'
                id='phoneNumber'
                className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                country='US'
                value={formValues.phoneNumber}
                onChange={handlePhoneChange}
              />
              <p className='text-red-500'>{formErrors.phoneNumber}</p>
            </div>
            <div>
              <label htmlFor='email' className='w-1/2 mr-2 '>
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='w-full focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-500 rounded-md border border-gray-300 p-2.5 mt-2'
                value={formValues.email}
                onChange={handleChange}
              />
              <p className='text-red-500'>{formErrors.email}</p>
            </div>
            <div>
              <select
                name='lessonType'
                id='lessonType'
                value={formValues.lessonType}
                onChange={handleChange}
                className='select select-bordered w-full max-w-xs mt-4'>
                <option value='' disabled selected>
                  Select Lesson Type
                </option>
                <option>Single Lesson</option>
                <option>10 Lesson Package</option>
              </select>
              <p className='text-red-500'>{formErrors.lessonType}</p>
            </div>
            <button className='btn mt-4 mx-auto'>Book Now</button>
            {submissionSuccess && (
              <div className='alert alert-success' role='alert'>
                Thank you! Honest Golf Coach will contact you shortly to schedule your first lesson!
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default bookLesson;
