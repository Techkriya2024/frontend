import React, { useState } from "react";

const ButtonRow = ({ onClubSelect }) => {
  const [activeButton, setActiveButton] = useState(0);

  const buttonNames = [
    "AI&R",
    "I&E CELL",
    "E-Yantra",
    "ECEA",
    "CSEA",
    "MEA",
    "PRAYATNAM",
    "EEEA",
    "CEA",
    "GC",
    "TASKFORCE",
  ];

  const handleButtonClick = (clubName, index) => {
    setActiveButton(index);
    onClubSelect(clubName); // Pass the selected club name to the parent
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap w-full mx-auto mb-2 pb-2 hide-scrollbar">
      <div className="inline-flex w-full justify-start pt-5 gap-3">
        {buttonNames.map((name, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(name, index)}
            className={`flex-shrink-0 min-w-[150px] h-11 rounded-tl-lg border border-white font-bold
              py-2 px-4 mx-1 text-lg tracking-wider uppercase 
              transition-all duration-300 ease-in-out text-center 
              ${
                activeButton === index
                  ? "bg-white text-[#131313]"
                  : "opacity-80 bg-transparent text-white"
              }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Inline Tailwind styles to hide scrollbars */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ButtonRow;
