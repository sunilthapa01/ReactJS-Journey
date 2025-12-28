import React from 'react'


function Header() {

  return (
      <div className='flex items-center justify-center flex-col gap-4 py-6 bg-[#8B5CF6] w-full  shadow-[0px_2px_10px_#000]'>
          <h1 className='text-5xl font-extrabold text-white text-shadow-[0px_0px_10px_#000] [-webkit-text-stroke:1px_#000]'>Random Image Gallery</h1>
          <p  className='text-1xl font-bold text-shadow-[0px_0px_10px_#fff] '>Discover beautiful random images from around the world</p>
    </div>
  )
}

export default Header
