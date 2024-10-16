import React from 'react';
import './Slider.css'; // Custom CSS for animation
import img from "../assets/techriya_logo_mod.png";

const sponsors = [img, img, img, img, img]; // Adjust with real logos

const LogosSlider = () => {
  return (
    <div className="slider-container w-full bg-[#131313] overflow-hidden py-8 relative">
      <p className='font-kindle text-center text-[2rem] text-white'> OUR SPONSORS </p>
      <div className="slider flex items-center space-x-8 animate-scroll">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="w-40 flex-shrink-0">
            <img src={sponsor} alt={`Sponsor ${index + 1}`} className="w-full h-auto object-contain" />
          </div>
        ))}
        {/** Duplicate for seamless scrolling **/}
        {sponsors.map((sponsor, index) => (
          <div key={index + sponsors.length} className="w-40 flex-shrink-0">
            <img src={sponsor} alt={`Sponsor ${index + 1}`} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosSlider;
