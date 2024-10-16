import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Techkriya_White.png";
import { RxCross1 } from "react-icons/rx";

const MenuBar = ({ menu, settingmenu }) => {
  return (
    <div
      className={`fixed z-30 top-0 left-0 w-full h-screen bg-black-1000 text-white transform ${
        menu ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center px-4 py-7 border-b border-gray-600">
        <button onClick={settingmenu} className="text-white text-2xl">
          <RxCross1 />
        </button>
        <div className=" flex justify-center w-full items-end">
          <span className="text-lg font-bold font-tech flex justify-end items-end">
            <img src={logo} alt="Logo" className=" h-6 mr-2" /> TECHKRIYA24
          </span>
        </div>
      </div>
      <nav className="text-center font-poppins">
        <div className="relative group z-0">
          <Link
            to="/home"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            HOME
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>
        </div>
        {/* <div className="relative group z-0">
          <Link
            to="/profile"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            PROFILE
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>
        </div> */}

        <div className="relative group z-0">
          <Link
            to="/events"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            EVENTS
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>

        </div>
        {/* <div className="relative group z-0">
          <Link
            to="/sponsors"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            SPONSOR'S
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>

        </div> */}
        <div className="relative group z-0">
          <Link
            to="/gallery"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            GALLERY
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>

        </div>
        <div className="relative group z-0">
          <Link
            to="/hostelAccomodation"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            HOSTEL ACCOMMODATION
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>

        </div>
        <div className="relative group z-0">
          <Link
            to="/brochure"
            className="block px-4 py-4 border-b border-[#dfdfdf] text-lg sm:text-xl group-hover:text-black duration-150 "
          >
            BROCHURE
          </Link>
          <div className="bg-[#dfdfdf] group-hover:translate-x-0  duration-150 top-0 translate-x-full w-full h-full -z-10 absolute"></div>

        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
