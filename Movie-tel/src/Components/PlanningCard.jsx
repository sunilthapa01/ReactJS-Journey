import React from 'react'

function PlanningCard({ic,title,description,onSelect }) {
  return (
      <div className='mt-8 border-2 border-[#AC7FF4] rounded-lg cursor-pointer hover:shadow-[0_0_10px_#AC7FF4] hover:scale-105 transition-all ease-in' onClick={() => onSelect({ title, description })}>
          <div className='flex flex-col gap-2 items-center w-full p-10 bg-[#1E1E1E] rounded-lg'>
        <h4>{ic}</h4>
        <p className='text-xl'>{ title}</p>
        <p className='text-xl'>{ description}</p>

          </div>
          
      
    </div>
  )
}

export default PlanningCard
