import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";



function Images() {

    const [gallery, setGallery] = useState([]);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
            setGallery(response.data)
                    // console.log(response.data.id)
            // console.log(index)

        }
        getData();


    }, [index])
    const LoadingMess = <h1 className='text-black text-7xl text-center font-bold mt-auto'> Loading.....</h1>
    if (gallery.length === 0) {
        return LoadingMess;
    }
    

    return (
        <div className='bg-[#E0F2FE] w-full h-full p-7'>
            <div className=' p-3 rounded-2xl w-full h-full grid grid-cols-3 gap-3'>
                {
                    gallery.map(e => (
                       
                        <div key={e.id} className="flex flex-col gap-1">
                          
                            
                            <img
                                src={e.download_url}
                                alt={e.author}
                                className="w-full h-48 object-cover rounded-xl cursor-pointer hover:scale-95 transition-all ease-in-out"
                            />
                            <h4 className="text-sm font-semibold text-center">{e.author}</h4>
                        </div>
                    ))
                }
           
            </div>
            <div className='flex w-full h-full bg-red gap-2'>
                <button className='px-4 py-3 bg-green-400 text-black rounded-2xl cursor-pointer w-[50%] active:scale-95 transition-all ease-in'>Prev</button>
                <h2>{ index}</h2>
                <button className='px-4 py-3 bg-green-400 text-black rounded-2xl cursor-pointer w-[50%] active:scale-95 transition-all ease-in' onClick={() => {
setIndex(pre => pre +1)                    }}>Next</button>
            </div>
            

        </div>
    )
}

export default Images

