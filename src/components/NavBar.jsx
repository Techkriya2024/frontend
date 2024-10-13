import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import TechriyaLogo from "../assets/techriya_logo_mod.png"
import { Link } from 'react-router-dom';
import TechriyaNameLogo from '../assets/Techkriya.svg'

function NavBar() {
  return (
    <div className='relative w-[90%] mx-auto  flex flex-row py-8 justify-between items-center overflow-hidden'>
        <Link to={"/"}>
          <div className='flex text-center justify-center items-center md:border-[3px] border-2 border-black-700 rounded-lg '>
              <GoChevronLeft color='grey' size={40}/>
          </div>
        </Link>
        <img src={TechriyaNameLogo} alt='TechriyaNameLogo' className='md:w-[300px]'/>
        <img src={TechriyaLogo} alt='Techriya_Logo' className='md:w-[80px] md:h-[80px] md:object-contain w-[50px] h-[50px]'/>
    </div>
  )
}

export default NavBar