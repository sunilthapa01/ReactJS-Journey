import React from 'react'

function Navbar({ NavClick }) {
  return (
    
    <div className='flex justify-between items-center px-25 py-3.5'>
      <img src='https://res.cloudinary.com/dkn6an4bw/image/upload/v1765873892/Frame_9_pkm6vi.png' alt='Logo' className='h-9'></img>
      <nav className='flex items-center'>
        <ul className='flex gap-8 text-lg cursor-pointer'>
          <li className='cursor-pointer'>About us</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Use Cases</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>
        <button type='button' className='border px-3 py-2.5 ml-3.5 cursor-pointer rounded-lg shadow-[0_0_3px_#000]' onClick={NavClick}>Request a quote</button>
     </nav>
    </div>
  )
}

export default Navbar
