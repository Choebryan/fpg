import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Honest Golf Coach is the GOAT',
      author: 'Bchoe',
    },
    {
      text: 'YERRRT',
      author: 'Bchoe',
    },
    {
      text: 'michael choe sucks',
      author: 'Bchoe',
    },
    {
      text: 'Honest Golf Coach is the GOAT',
      author: 'Bchoe',
    },
    {
      text: 'YERRRT',
      author: 'Bchoe',
    },
    {
      text: 'michael choe sucks',
      author: 'Bchoe',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  }

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className='bg-green-800 h-[300px] text-black rounded-xl'>
            <div className='h-40 rounded-t-xl bg-green flex justify-center items-center rounded-t-xl'>
              <p className='flex justify-center items-center text-xl font-semibold'>{t.author}</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
              <p className='text-xl font-semibold'>{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
