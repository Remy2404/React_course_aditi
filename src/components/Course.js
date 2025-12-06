import React from 'react'
import CourseCard from './CourseCard'
export const Course = () => {
     const CourseData = {
    cartimg: "https://th.bing.com/th/id/OIP.aEbXkifbQTbWEPBzI8nI_gHaEK?w=329&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    carttitle: "Meme Cat",
    cartdesc: "This is a meme cat. Cats are cute and funny. They like to chase laser pointers and nap in sunny spots."
  };
  return (
    <div className='mb-3 mx-auto p-3 border-primary around-3 border-3' style={{width: "60rem"}}>
      <CourseCard {...CourseData} />
    </div>
  )
}
