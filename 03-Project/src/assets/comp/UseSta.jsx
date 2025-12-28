import React, { useState } from 'react'

function UseSta() {

    const [inp, inputText] = useState('');

    function ShowFunc(e) {
        inputText(e.target.value);
        console.log(inp)
    }
  return (
      <div>
          <input type='text' placeholder='Enter something here...' value={inp} onChange={ShowFunc}></input>
          <h1>{inp}</h1>
          <h1>{inp.length}</h1>
          

    </div>
  )
}

export default UseSta
