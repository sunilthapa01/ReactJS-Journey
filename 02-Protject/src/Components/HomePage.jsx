import React from 'react'

function HomePage() {
  return (
    <div className=' flex px-25 gap-5 pt-7'>

      <div className='w-[50%]'>
        <h1 className='text-7xl mb-3.5'>Navigating the digital landscape for success</h1>
        <p className='text-xl mb-3'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className='bg-black text-white px-5 py-4 rounded-lg cursor-pointer  transition-all duration-300 ease-in-out
    hover:scale-105
    hover:bg-[#B9FF66]
    hover:text-black'>Book a consultant</button>
      </div>
      <div className='w-[50%]'>
        <img src='https://res.cloudinary.com/dkn6an4bw/image/upload/v1765873860/Illustration_laiwuh.png' alt='Homeimage'></img>
      </div>
    </div>


  )
}

export default HomePage
