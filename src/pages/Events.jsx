import React, { useState } from "react";
import ButtonRow from "../components/Buttons";
import EventCard from "../components/EventCard";
import logo from "../assets/techriya_logo_mod.png"
import {data} from "../utils/events"
const EventsPage = () => {
  const [selectedClub, setSelectedClub] = useState("AI&R"); // Store selected club
 // Store events
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       let url = BASE_URL+"/event/getAllEvents";
  //       const response = await axios.get(url);
  //       setEvents(response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     }
  //   };

  //   fetchEvents();
  // }, [selectedClub]); 

  return (
    <>
    {false?
 (
    <div className="bg-[#131313] h-screen flex justify-center items-center w-full ">
        <img src={logo} className="w-[6rem] animate-wiggle" alt="" />
       {/* <p className="text-white animate-wiggle">Loading...</p> */}
    </div>
 )   
:
      <div className="h-max bg-black text-white relative">
        <div className="relative z-10">
          {/* Pass setSelectedClub to ButtonRow */}
          <ButtonRow onClubSelect={setSelectedClub} />

          <div className="flex flex-wrap justify-center gap-4 p-4">
            {data.length > 0 ? (
              data.map((event) =>
                event.clubName === selectedClub ? (
                  <EventCard key={event._id} event={event} />
                ) : null
              )
            ) : (
              <p>No events available for {selectedClub}</p>
            )}
          </div>
        </div>
      </div>}
    </>
  );
};

export default EventsPage;
