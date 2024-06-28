import React from 'react';
import textTestimonial from '../../assets/textTestimonial.jpeg';

const LessonPackage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src={textTestimonial}
          className='max-w-full lg:max-w-md rounded-lg shadow-2xl mb-4 lg:ml-8'
        />
        <div>
          <h1 className='text-4xl font-bold'>
            Ready to Make Real Progress?
            <br />
            Sign Up for Your 10-Lesson Package Today!
          </h1>
          <p className='py-6 text-lg'>
            Our proven 10-lesson program is designed to help you:
            <br />
            <ul className='list-disc ml-4'>
              <br />
              <li>
                <strong>Master the fundamentals</strong>: Build a strong
                foundation for lasting improvement, no matter your current skill
                level.
              </li>
              <li>
                <strong>Lower your scores</strong>: See tangible results with
                expert guidance tailored to your game.
              </li>
              <li>
                <strong>Boost your confidence</strong>: Gain the skills and
                knowledge to approach the course with more confidence.
              </li>
              <li>
                <strong>Enjoy the game more!</strong> Focus on the fun of golf
                while experiencing the satisfaction of improvement.
              </li>
            </ul>
            <br />
            New to golf? No problem! We welcome golfers of{' '}
            <strong>all skill levels</strong> and tailor our program to your
            specific needs.
            <br />
            <br />
            Worried about the cost? Here's the good news: Our 10-lesson package
            saves you $500 compared to booking individual lessons. You'll
            receive personalized instruction, expert feedback, and a proven
            approach designed to help you see significant improvement – all at a
            <strong> competitive price point</strong>.
          </p>
          <div >
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPackage;
