import React from 'react'
import MainLogo from '../assets/techriya_logo_mod.png';
import { BiMenuAltRight } from "react-icons/bi";

function Header({settingmenu}) {
  return (
    <div className="w-full bg-[#131313] z-0">

        <div className=' flex gap-y-3 justify-between'>
            <div>
                <img src={MainLogo} width={70}/>
            </div>
            <div className=' font-tech text-[2rem] sm:text-[3rem] text-white-100'>
                TECHRIYA'24
            </div>
            <div className=' text-white-100 w-16'>
                <button onClick={settingmenu}>
                    <BiMenuAltRight size={50}/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Header