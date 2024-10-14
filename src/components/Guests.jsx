import React from "react";
import sam from "../assets/sam.png";
import dj from "../assets/dj.png";
import hema from "../assets/hema.png";
export default function Guests() {
  return (
    <>
      <div className="relative  h-max md:h-screen z-0 overflow-clip w-full flex  bg-[#131313] flex-col sm:justify-center items-center md:grid sm:grid-cols-3">
        <p className="text-center absolute font-tech font-extrabold text-[2rem] sm:text-[3rem] text-white w-full  z-20 top-0 ">
          OUR GUESTS
        </p>
        <div className="-rotate-12 text-[#EBE6D0] hidden md:flex gap-8 absolute top-1/4  -z-10  h-screen flex-col ">
          <p
            className="top-1/2 tracking-widest text-[#EBE6D0] scroller font-title font-extrabold text-[4.5rem] sm:text-[6rem] transform  w-[25rem] text-nowrap 
          "
          >
            SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
          </p>
          <div
            className=" text-[#EBE6D0] gap-5 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
          "
          >
            <p>
              Dj <br />
              Night
            </p>
            <p className="outline">
              Dj <br />
              Night
            </p>
            <p>
              Dj <br />
              Night
            </p>
            <p className="outline">
              Dj <br />
              Night
            </p>

          </div>

          <p
            className="top-1/2 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
        "
          >
            HEMA CHANDRA
            <span className="outline">HEMA CHANDRA</span>
            HEMA CHANDRA
            <span className="outline">HEMA CHANDRA</span>
            HEMA CHANDRA <span className="outline">HEMA CHANDRA</span>
            
          </p>
        </div>
        <div className="sm:h-[90%] relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-start pt-20 p-5 items-center">
          <img
            src={sam}
            alt="samyuktha menon"
            className="w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
            <p
              className="top-1/2 tracking-widest text-[#EBE6D0] scroller font-title font-extrabold text-[4.5rem] sm:text-[6rem] transform  w-[25rem] text-nowrap 
          "
            >
              SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON SAMYUKTHA MENON
            </p>
          </div>
        </div>
        <div className="sm:h-[90%] pt-20 relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-end p-5 items-center">
          <img
            src={dj}
            alt="dj"
            className="w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
            <div
              className=" text-[#EBE6D0] gap-5 scroller font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  w-[25rem] text-nowrap
          "
            >
              <p>
                Dj <br />
                Night
              </p>
              <p className="outline">
                Dj <br />
                Night
              </p>
              <p>
                Dj <br />
                Night
              </p>
              <p className="outline">
                Dj <br />
                Night
              </p>
              <p>
                Dj <br />
                Night
              </p>
              <p className="outline">
                Dj <br />
                Night
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[90%] pt-20 relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-start p-5 items-center">
          <img
            src={hema}
            alt="hema"
            className="w-[15rem]  hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="absolute top-1/2 rotate-12  -z-10 w-full h-full md:hidden">
            <div
              className=" text-[#EBE6D0]  font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  text-nowrap w-full scroller gap-5  
          "
            >
              <p>
                Hema <br />
                Chandra
              </p>
              <p className="outline">
                Hema <br />
                Chandra
              </p>
              <p>
                Hema <br />
                Chandra
              </p>
              <p className="outline">
                Hema <br />
                Chandra
              </p>
              <p>
                Hema <br />
                Chandra
              </p>
              <p className="outline">
                Hema <br />
                Chandra
              </p>
              <p>
                Hema <br />
                Chandra
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
