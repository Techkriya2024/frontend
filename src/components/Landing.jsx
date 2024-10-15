import React from "react";
import Timer from "./Timer";
// import CustomCursorTrail from "./Cursor";
// import logo from "../assets/techriya_logo_mod.png"
export default function Landing() {
  return (
    <div className="w-full bg-[#131313] relative  h-screen flex overflow-hidden flex-col justify-center z-0 items-center">
      {/* <CustomCursorTrail/> */}

      {/* <div className="bg-moving-gradient  w-full h-screen rounded absolute  lg:top-1/4 z-10  custom-clip-path shadow-[#EBE6D0]"></div> */}
      {/*       
      <div className="absolute rotate-12 p-3 z-0">
        <img src={logo} alt="" className="opacity-25"/>
        </div> */}
      {/* <div className="bg-black/10 w-full h-[100vh] backdrop-blur-sm backdrop-filter absolute  "></div> */}
      <p className="font-tech text-[2.75rem] sm:text-[5rem] z-30 text-center text-white">
        TECHKRIYA24
      </p>
      <p className="font-tech text-[1.75rem] sm:text-[3rem] z-10 text-center text-white">
        ECHOES BEYOND TIME
      </p>
      <div className="absolute w-full z-10 bottom-16">
        <Timer />
      </div>
    </div>
  );
}
