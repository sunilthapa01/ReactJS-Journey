import React from 'react'
import Cards from './Cards'

function Home({setScreen}) {
    const Images = [
        {
            id:1,
            image:'https://res.cloudinary.com/dkn6an4bw/image/upload/v1765997959/Fighter_hmbrpt.jpg'
        },
        {
            id:2,
            image:'https://res.cloudinary.com/dkn6an4bw/image/upload/v1765997959/download_1_erd3lu.jpg'
        },
        {   id:3,
            image: 'https://res.cloudinary.com/dkn6an4bw/image/upload/v1765997959/interstellar_e1gprz.jpg'
        }
    ]
    

  return (
      <div className='pt-15 flex w-2/2'>
          <div className='bg-[#] h-screen w-1/2  gap-10 py-20 flex flex-col px-10'>
              <div className='mb-2'>
                  <h1 className='text-7xl font-bold text-shadow-lg/40 text-white'>Movie Night</h1>
                  <h3 className='text-8xl font-bold italic text-shadow-lg/50'>Planner</h3>    
              </div>
              <button className='w-3xs bg-amber-950 text-center py-3 px-10 rounded-2xl text-black font-bold bg-linear-to-r from-[#18B4F4] to-[#AC7FF4] shadow-[0_2px_0_#000] cursor-pointer
              
              ' onClick={() => {
                setScreen("planning")
              }}>Start Planning</button>

          </div>
          <div className='bg-amber-700 w-1/2 h-screen  flex overflow-x-auto'>
              
              
            {Images.map((card) => {
                      return <Cards im={card.image}></Cards>
                  })
              }
          </div>
      
    </div>
  )
}

export default Home