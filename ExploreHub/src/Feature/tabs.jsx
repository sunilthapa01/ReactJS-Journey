import React from 'react'

function Tabs({ ClickDog, ClickForMeal,ClickForCat }) {

 
  return (
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full px-5 py-2 gap-2'>
          <button className='w-full bg-[#1E1E1E] text-white font-bold shadow-[0_3px_0_#000] h-10 cursor-pointer rounded-4xl active:scale-80 active:bg-[#AC7FF4] transition-all 0.3s ease-in' onClick={ClickDog}>Dogs</button>
          <button className='w-full bg-[#1E1E1E] text-white font-bold shadow-[0_3px_0_#000] h-10 cursor-pointer rounded-4xl active:scale-80 active:bg-[#AC7FF4] transition-all 0.3s ease-in' onClick={ClickForMeal}>Meals</button>
          <button className='w-full bg-[#1E1E1E] text-white font-bold shadow-[0_3px_0_#000] h-10 cursor-pointer rounded-4xl active:scale-80 active:bg-[#AC7FF4] transition-all 0.3s ease-in' onClick={ClickForCat}>Cats</button>
          {/* <button className='w-[25%] bg-[#1E1E1E] text-white font-bold shadow-[0_3px_0_#000] h-10 cursor-pointer rounded-4xl active:scale-80 active:bg-[#AC7FF4] transition-all 0.3s ease-in'>Tab1</button> */}

     
      
    </div>
  )
}

export default Tabs