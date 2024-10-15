import React from "react";
import "../CSS/Sponshership.css"; // Keep this for the keyframes

const LogosSlider = () => {
  // Placeholder array for logos
  const logos = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
    "Placeholder 5",
    "Placeholder 6",
    "Placeholder 7",
    "Placeholder 8",
    "Placeholder 9",
    "Placeholder 10",
    "Placeholder 11",
    "Placeholder 12",
  ];

  return (
    <div className="logos overflow-hidden relative py-16 bg-black text-white">
      {/* Gradients for fade effects */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-r from-white to-transparent z-10"></div>

      {/* Logos slide */}
      <div className="logos-slide inline-flex animate-slide">
        {/* Duplicate all logos for seamless effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-placeholder inline-block mx-10">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosSlider;