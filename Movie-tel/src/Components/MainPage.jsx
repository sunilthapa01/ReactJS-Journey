import React from 'react'
import Header from './header';
import Home from './home';
import Planning from './Planning';
import { useState } from 'react';
function MainPage() {
  const [screen, setScreen] = useState('home');

  return (
    <div className=''>
      <Header screen={screen} setScreen={setScreen} />

      {screen === "home" && <Home setScreen={setScreen} />}
      {screen === "planning" && <Planning />}


    </div>
  )
}

export default MainPage
