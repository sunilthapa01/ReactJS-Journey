import React from 'react'

function Dog({dogs}) {
    if (!dogs || dogs.length === 0) {
        return (
          <div className="mx-5 mt-4 text-white">
            Loading dog...
          </div>
        )
      }
    
    const dog = dogs[0];
  return (
      <div className='mx-5 mt-4 border-2 h-full rounded-2xl p-2 bg-[#1E1E1E]'>
          <div className='w-full  h-75 rounded-[8px_8px_0px_0px] flex flex-col justify-end p-6 bg-cover bg-center h-75' style={{ backgroundImage: `url(${dog.image.url})` }}>
              <h1 className='text-white text-[50px] font-bold'>{dog.name}</h1>
              <button className='py-2 px-8 bg-[#1E1E1E] text-white rounded-lg w-fit'>{dog.breed_group}</button>
          </div>
          <div className='p-6 w-full h-1/2'>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='border-2  h-29.75 p-4  flex flex-col justify-center rounded-2xl bg-[#2A2A2A] shadow-[6px_6px_0px_#fff]'>
                      <h1 className='text-white font-bold text-2xl'>Bred For</h1>
                      <p className='text-white font-bold text-1xl'>{dog.bred_for }</p>
     </div>

            <div className='border-2  h-29.75 p-4  flex flex-col justify-center rounded-2xl bg-[#2A2A2A] shadow-[6px_6px_0px_#fff]'>
                      <h1 className='text-white font-bold text-2xl'>Breed Group</h1>
                      <p className='text-white font-bold text-1xl'>{ dog.breed_group}</p>
     </div><div className='border-2  h-29.75 p-4  flex flex-col justify-center rounded-2xl bg-[#2A2A2A] shadow-[6px_6px_0px_#fff]'>
                      <h1 className='text-white font-bold text-2xl'>Life Span</h1>
                      <p className='text-white font-bold text-1xl'>{ dog.life_span}</p>
     </div>      
                  
                 
                  
              </div>
              <div className='w-full border-3 bg-[#1E1E1E] mt-3.5 h-35 rounded-2xl p-4'>
                  <h1 className='text-white text-3xl mb-3'>Origin</h1>
                  <p className='text-white font-bold text-wrap'>{ dog.origin}.</p>
              </div>
          </div>
      
    </div>
  )
}

export default Dog
