import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="relative mx-auto scale-90 sm:scale-95  w-[19.6rem]">
        <img
          src={event.image}  // Dynamic image
          alt={event.name}
          className="w-full bg-[#131313]"
          style={{
            borderTop: "4px solid #D9D9D9",
            borderLeft: "4px solid #D9D9D9",
            borderRight: "none",
            borderBottom: "none",
          }}
        />
      <div
        className="bg-[#D9D9D9] p-5  text-center relative w-[19.6rem] h-[15rem]"
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="font-orbitron text-2xl font-bold leading-6 tracking-wide text-black">
          {event.name}
        </h1>
        <h2 className="font-orbitron text-xl font-bold italic text-white mt-1 bg-black p-2">
          {event.clubName}
        </h2>
        <p className="font-orbitron text-sm text-black mt-2 leading-relaxed">
          {event.description}
        </p>
        <div className="relative flex justify-center">
        <div className="absolute top-5 rounded-sm left-2 bg-black w-[15rem] h-[3.75rem] -z-10">

        </div>
        <Link to={"/event"} state={event} className="shadow-md shadow-black-700 absolute font-tech rounded-sm w-[15rem] h-[3.75rem] top-0 mt-4 bg-white text-black py-3 sm:py-2 px-6 hover:bg-gray-100 transition duration-300 text-[1.5rem] sm:text-[1.75rem]">
          REGISTER
        </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
