import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="relative mx-auto  w-[19.6rem]">
        <img
          src={event.image}  // Dynamic image
          alt={event.name}
          className="w-full"
          style={{
            borderTop: "4px solid #D9D9D9",
            borderLeft: "4px solid #D9D9D9",
            borderRight: "none",
            borderBottom: "none",
          }}
        />
      <div
        className="bg-[#D9D9D9] p-5  text-center relative w-[19.6rem] h-[17rem]"
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="font-orbitron text-2xl font-bold leading-6 tracking-wide text-black">
          {event.name}
        </h1>
        <h2 className="font-orbitron text-lg text-white mt-1 bg-black p-2">
          {event.club}
        </h2>
        <p className="font-orbitron text-sm text-black mt-2 leading-relaxed">
          {event.description}
        </p>
        <div className="relative flex justify-center">
        <div className="absolute top-5 rounded-sm left-2 bg-black w-[247px] h-[57px] -z-10">

        </div>
        <button className="absolute font-tech rounded-sm shadow-black w-[247px] h-[57px] top-0 mt-4 bg-white text-black py-2 px-6 hover:bg-gray-100 transition duration-300 text-[1.75rem]">
          REGISTER
        </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
