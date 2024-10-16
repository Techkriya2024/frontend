import React from "react";
import EventCard from "./EventCard";
import {data} from "../utils/events"
import { Link } from "react-router-dom";
export default function HomeEvents() {
  const event =data.slice(0,3)
  
  return (
    <>
      <div className="w-full h-max bg-[#131313] relative z-0 overflow-clip pb-5">
        
        <div className="sm:pt-[5rem] pt-[3rem] pb-6">
          <div className="rotate-[10deg] sm:rotate-[5deg] origin-center  bg-yellow-400 w-full -z-10">
            <p
              className="scroller text-black font-extrabold text-[1rem] transform  w-[50rem] text-nowrap
            "
            >
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS{" "}
            </p>
          </div>
          <div className="-rotate-[10deg] sm:-rotate-[5deg] origin-center  bg-yellow-400 w-full  -z-10 ">
            <p
              className="scroller font-title font-extrabold text-[1rem] transform  w-[50rem] text-nowrap
            "
            >
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS
              EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center  ">
          {
            event.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          }
          
        </div>
        <div className="inline-flex w-full justify-center">

        <Link to={"/events"} className=" font-tech rounded-md  bg-white text-black py-2 px-6 hover:bg-gray-100 transition duration-300 sm:text-[1.5rem]">
        EXPLORE MORE
        </Link>     
        </div>
         </div>
    </>
  );
}
