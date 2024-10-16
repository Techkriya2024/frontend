import React from 'react'

import  { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../services/APIs"
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import EventCard from "../components/EventRe"
import logo from "../assets/techriya_logo_mod.png"
const VisitedEvents = () => {
    const navigate = useNavigate();
  // Store selected club
  const token=localStorage.getItem("token");
 // Store events
  const [loading, setLoading] = useState(true);
  const [events,setEvents]=useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = BASE_URL+"/user/visitedEvents";
        const response = await axios.get(
            url, // The URL you're requesting
            {
              headers: {
                Authorization: `Bearer ${token}`, // Authorization header with the token
              },
            }
          );
        setEvents(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [token]); 

  return (
    <>
    {loading?
 (
    <div className="bg-[#131313] h-screen flex justify-center items-center w-full ">
        <img src={logo} className="w-[6rem] animate-wiggle" alt="" />
       {/* <p className="text-white animate-wiggle">Loading...</p> */}
    </div>
 )   
:
      <div className="h-max bg-black text-white relative">
        <div className="flex shadow shadow-black justify-start gap-5 items-center h-[5rem] p-3">
        <button onClick={() => navigate(-1)}>
          <IoChevronBackOutline
            size={40}
            className="border-2 text-black-600 border-black-600  rounded-md p-1"
          />
        </button>
        <p className="text-white font-kindle text-[1.6rem] tracking-wider">
          Visited Events
        </p>
      </div>
        <div className="relative z-10">
          {/* Pass setSelectedClub to ButtonRow */}
     

          <div className="flex flex-wrap justify-center gap-4 p-4">
            {events.length > 0 ? (
              events.map((event) =>
              
                  <EventCard key={event._id} event={event} />
             
              )
            ) : (
<p>NO VISITED EVENTS</p>
)}
          </div>
        </div>
      </div>}
    </>
  );
};

export default VisitedEvents;


