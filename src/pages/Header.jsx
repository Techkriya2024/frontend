import React from 'react'
import MainLogo from '../assets/Techkriya_White.png';
import { BiMenuAltRight } from "react-icons/bi";

function Header({settingmenu}) {
  return (
    <div className="w-full fixed top-0 z-30 bg-[#131313] ">

        <div className=' flex gap-y-3 justify-between'>
            <div className='p-2 flex items-center gap-1'>
                <img src={MainLogo} alt='logo' className='h-[2rem]'/>
            <p className=' font-tech text-[2rem] sm:text-[3rem] text-white'>
                TECHRIYA'24
            </p>
            </div>
            <div className='flex justify-center items-center text-white w-16 '>
                <button onClick={settingmenu}>
                    <BiMenuAltRight size={45}/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Header