import React from "react";
import Timer from "./Timer";
export default function Landing() {
  return (
    <div className="w-full bg-[#131313] relative h-screen flex flex-col justify-center z-0 items-center">
      <p className="font-tech text-[2.75rem] sm:text-[5rem] z-10 text-center text-white">
        TECHKRIYA24
      </p>
      <p className="font-tech text-[1.75rem] sm:text-[3rem] z-10 text-center text-white">
        ECHOES BEYOND TIME
      </p>
<div className="absolute w-full bottom-16">

      <Timer />
</div>
    </div>
  );
}
