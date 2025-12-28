import React from 'react'
import NotPad from './Component/NotPad';
function App() {

  function FormHandler(e) {
    e.preventDefault();
    alert("Form Submitted !")
  }

  
  return (
    <div>
      <form onSubmit={(e) => {
        FormHandler(e)
      }}>
        <input type='text' placeholder='Enter Something here...'></input>
        <button> submit</button>
      </form>
      <NotPad></NotPad>
      
    </div>
  )
}

export default App
