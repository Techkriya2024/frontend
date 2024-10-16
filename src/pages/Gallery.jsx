import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'

export default function Gallery() {
    const navigate=useNavigate();
  return (
    <div className='bg-[#131313] h-screen w-full'>
        <div className='flex shadow shadow-black justify-start gap-5 items-center h-[5rem] p-3'>

 <button onClick={() => navigate(-1)}>
            <IoChevronBackOutline
              size={40}
              className="border-2 text-black-600 border-black-600  rounded-md p-1"
              />
          </button>
          <p className='text-white font-kindle text-[1.6rem] tracking-wider'>Gallery</p>
          
              </div>
              <div>

              </div>
    </div>
  )
}
