import React from 'react';
import jonsSwing from '../../assets/jonsSwing.jpeg';
const OneLesson = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={jonsSwing} className='max-w-md rounded-lg shadow-2xl mr-8' />
        <div>
          <h1 className='text-3xl font-bold'>
            See a Difference in Your Swing After Just One Lesson!
          </h1>
          <p className='py-6 text-lg'>
            We'll work with you to identify swing issues, create a personalized
            plan for improvement, and get you started on the path to hitting the
            ball with more confidence. Schedule your first lesson today for only $150!
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default OneLesson;
