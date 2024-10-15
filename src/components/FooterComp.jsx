import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function FooterComp() {
  return (
    <>
      <div className="w-full h-max md:h-[20rem] grid grid-cols-2 md:grid-cols-5 border-t-2 border-black-600">
        <div className="col-span-2 bg-[#131313] relative overflow-clip min-h-[10rem] group sm:border-r-2 border-[#d3d3d3] flex items-start   flex-col justify-center">
          <div className="bg-black/20 absolute w-full h-full -translate-y-full group-hover:translate-y-0 duration-150"></div>
          <p className="text-[1.25rem] pl-5 font-light text-black-300">
            Get In Touch
          </p>
            <p className="text-[1.25rem] sm:text-[1.5rem] pl-5  italic text-[#d6d6d6]">
              techkriya@nitandhra.ac.in
            </p>
        </div>
        <div className="bg-[#131313] min-h-[10rem] border-r-2 border-[#d3d3d3] col-span-1 flex justify-center relative items-center overflow-clip group z-0">
         <Link to="https://www.instagram.com/techkriya_nitanp/" target="_blank" className="z-10">
          <FaInstagram
            className="text-[#d6d6d6] group-hover:text-black duration-150 z-10"
            size={50}
            />
            </Link>
          <div className="bg-[#d6d6d6] absolute w-full h-full -translate-y-full group-hover:translate-y-0 duration-150"></div>
        </div>
        <div className="bg-[#131313] sm:border-r-2 border-[#d6d6d6] col-span-1 flex justify-center relative items-center overflow-clip group z-0">
        <Link to="https://www.instagram.com/techkriya_nitanp/" target="_blank" className="z-10">

          <FaFacebook
            className="text-[#d6d6d6] group-hover:text-black duration-150 z-10"
            size={50}
          />
          </Link>
          <div className="bg-[#d6d6d6] absolute w-full h-full -translate-y-full group-hover:translate-y-0 duration-150"></div>
        </div>
        <div className="bg-[#131313] text-[#d6d6d6] flex-col col-span-2 md:col-span-1 flex justify-center relative items-center overflow-clip group z-0">
          <div className="flex-col min-h-[10rem] justify-center flex gap-1">
            <Link to={"/hostelAccomodation"} className=" text-[1.2rem]">
              HostelAccomodation
            </Link>
            <Link to={"/gallery"} className=" text-[1.2rem]">
              Gallery
            </Link>
            <Link to={"/coreTeam"} className=" text-[1.2rem]">
              Core Team
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#131313] p-1 text-[#d6d6d6] text-[0.85rem] text-left">
        Copyright © 2024 TECHKRIYA. All Rights Reserved.
      </div>
    </>
  );
}
