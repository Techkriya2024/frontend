import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/techriya_logo_mod.png';
import { RxCross1 } from "react-icons/rx";


const MenuBar = ({ menu, settingmenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black-1000 text-white transform ${
        menu ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center px-4 py-7 border-b border-gray-600">
        <button onClick={settingmenu} className="text-white text-2xl"><RxCross1/></button>
        <div  className=' flex justify-center w-full items-end'>
        <span className="text-lg font-bold flex justify-end items-end">
          <img src={logo} width={50} alt="Logo" className="w-6 h-6 mr-2" /> Techkriya24
        </span>
        </div>
        
      </div>
      <nav className="text-center">
        <Link to="/home" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
          HOME
        </Link>
        
        <Link to="/about" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        ABOUT
        </Link>

        <Link to="/events" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        EVENTS
        </Link>
        <Link to="/sponsors" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        SPONSOR'S
        </Link>
        
        <Link to="/gallery" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        GALLERY
        </Link>
        
        <Link to="/hostelAccomodation" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        HOSTEL ACCOMMODATION
        
        </Link>
        <Link to="/brochure" className="block px-4 py-4 border-b border-gray-600 hover:bg-gray-700 text-lg sm:text-xl">
        BROCHURE
        </Link>
      </nav>
    </div>
  );
};

export default MenuBar;