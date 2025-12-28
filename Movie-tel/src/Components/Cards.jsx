import React from 'react'

function Cards({ im }) {
    console.log(im)
  return (
      <div className='min-w-full h-full'>
          <img src={im} alt='image' className='h-full w-full object-cover'></img> 
          
      
    </div>
  )
}

export default Cards
