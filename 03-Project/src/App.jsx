import React, { useState } from 'react';
import UseSta from './assets/comp/UseSta';

function App() {

  const [num, Count] = useState(0)
  const [message, setmessage] = useState('')

  const func = () => {

    Count(num + 1);
    if (num <= 5) {
      setmessage('Low');
    } else {
      setmessage('heigh');
    }
    
  };
  
  return (
    <div>
      <h1>{message}</h1> 
      <h1>{ num}</h1>
      <button onClick={func}>Add</button>
    <UseSta></UseSta>

    </div>
    
  )
}

export default App
