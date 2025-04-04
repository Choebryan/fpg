import React from 'react'
import NavBar from '../home/components/NavBar'


const myLessons = () => {
  return (

    <div className='lessonContainer'>
        <NavBar></NavBar>
        <h1 className='text-3xl font-bold text-center m-8'>My Lessons</h1>
        <div className='m-8'>
            <h2>Lesson 1</h2>
            <p>Lesson Date: 10/10/2021</p>
            <p>Lesson Time: 10:00 AM</p>
            <p>Lesson Duration: 1 hour</p>
            <p>Lesson Location: 1234 Main St, Anytown, USA</p>
        </div>
    </div>

  )
}

export default myLessons;