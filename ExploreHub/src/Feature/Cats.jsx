import React from 'react'

function Cats({ Cats }) {

    if (!Cats || Cats.length === 0 ) {
        return (<div>
            <h1>Please Wait For Sometime Cart's are Coming ; </h1>
        </div>)
    }

  return (
      <div className='mx-5 mt-4 border-2 h-full p-2 bg-[#1E1E1E] grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-2'>
          {Cats.map((e) => {
             return <div className='border-3 bg-[#1E1E1E] w-full h-full rounded-[10px_10px_10px_10px]'>
              <img src={e.image} alt='CatImageFromtheApi' className='bg-green-400 w-full h-70 rounded-[10px_10px_0px_0px]'></img>
              <div className='flex flex-col gap-1 p-2'>
                  <h1 className='text-white font-bold text-2xl '>{ e.name}</h1>
                     <p className='text-white italic text-1xl'>{ e.description}</p>
              </div>
            
          </div>
         })}
         
    </div>
  )
}

export default Cats
