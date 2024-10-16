import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sam from "../assets/homeSp/stunts.png";
import isro from "../assets/homeSp/ISRO poster.png"
import dj from "../assets/dj.png";

gsap.registerPlugin(ScrollTrigger);

export default function Guests() {
  useEffect(() => {
    const images = gsap.utils.toArray(".guest-image");

    images.forEach((image) => {
      gsap.fromTo(
        image,
        { rotate: 0, scale: 1 },
        {
          rotate: 0,
          scale: 1.2,
          duration: 1,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: image,
            once:true,
            start: "top 70%", // Trigger when the top of the image is 80% from the top of the viewport
            toggleActions: "play none none reset", // Play the animation when in view
          },
        }
      );
    });
  }, []);
  return (
    <>
      <div className="relative  h-max md:h-screen z-0 overflow-clip w-full flex  bg-[#131313] flex-col sm:justify-center items-center md:grid sm:grid-cols-3">
        <p className="text-center absolute font-tech font-extrabold text-[2rem] sm:text-[3rem] text-white w-full  z-20 top-0 ">
          {/* OUR GUESTS */} TECH TRACTION
        </p>
        <div className="-rotate-12 text-[#EBE6D0] hidden md:flex gap-8 absolute top-1/4  -z-10  h-screen flex-col ">
          <p
            className="top-1/2 tracking-widest text-[#EBE6D0] scroller font-title font-extrabold text-[4.5rem] sm:text-[6rem] transform  w-[25rem] text-nowrap 
          "
          >
            BIKE STUNT SHOW BIKE STUNT SHOW BIKE STUNT SHOW BIKE STUNT SHOW BIKE
            STUNT SHOW
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
            SPACE ON WHEELS
            <span className="outline">SPACE ON WHEELS</span>
            SPACE ON WHEELS
            <span className="outline">SPACE ON WHEELS</span>
            SPACE ON WHEELS
            <span className="outline">SPACE ON WHEELS</span>
          </p>
        </div>
        <div className="sm:h-[90%] relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-start pt-20 p-5 items-center">
          <img
            src={sam}
            alt="stunts"
            className="guest-image w-[15rem] sm:w-[25rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="rotate-12 absolute top-1/2 -z-10  h-full md:hidden">
            <p
              className="top-1/2 tracking-widest text-[#EBE6D0] scroller font-title font-extrabold text-[4.5rem] sm:text-[6rem] transform  w-[25rem] text-nowrap 
          "
            >
              BIKE STUNT SHOW BIKE STUNT SHOW BIKE STUNT SHOW BIKE STUNT SHOW
              BIKE STUNT SHOW{" "}
            </p>
          </div>
        </div>
        <div className="sm:h-[90%] pt-20 relative md:justify-center h-[25rem] z-10 w-full overflow-clip flex justify-end p-5 items-center">
          <img
            src={dj}
            alt="dj"
            className="guest-image w-[15rem] hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="rotate-12 absolute top-1/4 -z-10 -translate-x-[15rem]  h-full md:hidden">
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
            src={isro}
            alt="isro"
            className="guest-image w-[15rem]  hover:scale-105 duration-150 h-[20rem] md:w-full md:h-full object-contain "
          />
          <div className="absolute top-1/2 rotate-12  -z-10 w-full h-full md:hidden">
            <div
              className=" text-[#EBE6D0]  font-title font-extrabold text-[3.75rem] sm:text-[6rem] transform  text-nowrap w-full scroller gap-5  
          "
            >
              <p>
                SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p className="outline">
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p>
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p className="outline">
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p>
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p className="outline">
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
              <p>
              SPACE ON WHEELS
                <br />
                ON WHEELS{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
