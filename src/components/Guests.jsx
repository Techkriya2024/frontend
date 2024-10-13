import React from 'react'
import sam from "../assets/sam.png";

export default function Guests() {
  return (
    <div className="relative  shadow-inner-custom  h-max md:h-screen z-10 overflow-clip w-full flex bg-black flex-col sm:justify-center items-center md:grid sm:grid-cols-3">
    <div className="-rotate-12 text-[#EBE6D0] hidden md:flex gap-8 absolute top-1/4  -z-10  h-screen flex-col ">
      <p
        className="top-1/2 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
      >
        SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
      </p>
      <p
        className="top-1/2 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
      >
        SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
      </p>
      <p
        className="top-1/2 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
      >
        SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
      </p>
    </div>

    <div className="sm:h-[90%] relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-start p-10 items-center">
      <img
        src={sam}
        alt="samyuktha menon"
        className="w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-cover "
      />
      <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
        <p
          className="top-1/2 text-[#EBE6D0] scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
        >
          SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
        </p>
      </div>
    </div>

    <div className="sm:h-[90%] relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-end p-10 items-center">
      <img
        src={sam}
        alt="samyuktha menon"
        className="w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-cover "
      />
      <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
        <p
          className="top-1/2 text-[#EBE6D0] scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
        >
          SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
        </p>
      </div>
    </div>

    <div className="sm:h-[90%] relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-start p-10 items-center">
      <img
        src={sam}
        alt="samyuktha menon"
        className="w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-cover "
      />
      <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
        <p
          className="top-1/2 text-[#EBE6D0] scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
        >
          SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
        </p>
      </div>
    </div>
  </div>  )
}
