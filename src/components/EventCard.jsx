import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="relative border-t-5 border-l-5 border-white max-w-sm mx-auto p-5">
      <div className="relative">
        <img
          src={event.image}  // Dynamic image
          alt={event.name}
          className="w-full"
          style={{
            borderTop: "4px solid white",
            borderLeft: "4px solid white",
            borderRight: "none",
            borderBottom: "none",
          }}
        />
      </div>
      <div
        className="bg-gray-300 p-5 mt-2 text-center relative"
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="font-orbitron text-2xl font-bold leading-6 tracking-wide text-black">
          {event.name}
        </h1>
        <h2 className="font-orbitron text-lg text-white mt-1 bg-black p-2">
          {event.club.name}
        </h2>
        <p className="font-orbitron text-sm text-black mt-2 leading-relaxed">
          {event.description}
        </p>
        <button className="mt-4 bg-white text-black py-2 px-6 border border-black hover:bg-gray-100 transition duration-300">
          Register ({event.coins} Coins)
        </button>
      </div>
    </div>
  );
};

export default EventCard;
