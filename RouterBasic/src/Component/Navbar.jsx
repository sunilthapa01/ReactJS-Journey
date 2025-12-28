import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <div className='Nav'>
          <h3>CodingPrac</h3>
          <div className='ele'>
              <Link to='/'>Home</Link>
              <Link to='/About'>About</Link>
              <Link to='/Contact'>Contact Us</Link>
              <Link to='/Service'>Services</Link>
              <Link to='/Product'>Product</Link>
          </div>
      
    </div>
  )
}

export default Navbar
