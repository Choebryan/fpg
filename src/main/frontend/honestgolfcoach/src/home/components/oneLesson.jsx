import React from 'react';
import jonsSwing from '../../assets/jonsSwing.jpeg';
const OneLesson = () => {
  return (
    <div className='hero min-h-screen bg-white'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src={jonsSwing}
          className='max-w-md lg:max-w-md rounded-lg shadow-2xl mb-4 lg:mr-8'
        />
        <div>
          <h1 className='text-3xl font-bold text-center lg:text-left text-black'>
            See a Difference in Your Swing After Just One Lesson!
          </h1>
          <p className='py-6 text-lg text-center lg:text-left text-black'>
            We'll work with you to identify swing issues, create a personalized
            plan for improvement, and get you started on the path to hitting the
            ball with more confidence. Schedule your first lesson today for only
            $150!
          </p>
          <div className='flex justify-center lg:justify-start'>
            <button className='btn bg-bunker hover:bg-bunkerDark text-white focus:outline-none'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneLesson;
