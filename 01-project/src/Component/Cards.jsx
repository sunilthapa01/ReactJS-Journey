import React from 'react'

function Cards({ image, title, description, buttonText, footerLeft, footerRight }) {
  return (
          <>
        
                          <div className='Card'>
                                  <div className='Card-image'>
                                  <img 
  src={image} 
  alt="busy city at night"
/>

                                          
                                  </div>
                                  <div className='Card-cont'>
                                  <h2>{title}</h2>
                                          <p>{description}
                                          </p>
                                  <button>{buttonText}</button>
                                  </div>
                                  <div className='footer'>
                                  <p>{ footerLeft}</p>
                                  <p>{ footerRight}</p>
                                  </div>
                          </div>
          
          
          </>
  )
}

export default Cards
