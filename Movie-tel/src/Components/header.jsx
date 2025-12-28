import React from 'react'
import Home from './home';

function Header({ setScreen }) {
  console.log(screen)
  return (
      <div className='flex px-10 py-4  fixed w-full backdrop-blur-lg bg-white/30 shadow-[0_0_10px_#000]'>
      <h1 className='text-xl font-bold text-white cursor-pointer' onClick={() => { setScreen('home') }}  >MovieNight</h1>
    </div>
  )
}

export default Header
