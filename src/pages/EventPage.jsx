import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonRow from "../components/Buttons";
import EventCard from "../components/EventCard";

const EventPage = () => {
  const [selectedClub, setSelectedClub] = useState(null); // Store selected club
  const [events, setEvents] = useState([]); // Store events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = "http://localhost:3000/event";
        if (selectedClub) {
          url += `?club=${selectedClub}`; // Send club filter to the backend
        }
        const response = await axios.get(url);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [selectedClub]); // Refetch events when selectedClub changes

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="relative z-10">
        {/* Pass setSelectedClub to ButtonRow */}
        <ButtonRow onClubSelect={setSelectedClub} />

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {events.length > 0 ? (
            events.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <p>No events available for {selectedClub}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
