import React from "react";
import "./Slider.css"; // Keep this for the keyframes
import img from "../assets/techriya_logo_mod.png"
const LogosSlider = () => {
  // Placeholder array for logos
  const logos = [
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
    {
      logo:img,
      name:"Techriya",
    },
   
  ];

  return (
    <div className="logos flex flex-col gap-5 overflow-hidden relative py-16 bg-[#131313] text-white">
      {/* Gradients for fade effects */}
      <p className="text-center text-[2rem] font-kindle  text-[#d6d6d6]">Our Sponsors</p>
      <div className="absolute inset-y-0 left-0 w-[16rem] bg-gradient-to-r from-[#131313] via-black/20 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[16rem] bg-gradient-to-l from-[#131313] via-black/20 to-black/10 z-10"></div>

      {/* Logos slide */}
      <div className="logos-slide inline-flex animate-slide">
        {/* Duplicate all logos for seamless effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-placeholder inline-flex flex-col justify-center mx-10">
            <img src={logo.logo} className="h-[5rem] w-[16rem]" alt="" />
            {logo.name} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosSlider;