import { useLocation } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline as BackButton } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
export default function Event() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const registerEvent = async (id) => {
    
    toast("Registering");
    let url =
      "http://localhost:4000/api/v1/user/register/"+id;
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      )
      toast(response.data.message);

    } catch (error) {
      if (error.response) {
        toast(error.response.data.message)

      }
    }
  };
  const event = location.state;
  return (
    <>
      <div className="bg-[#131313] h-max min-h-screen relative  flex flex-col sm:flex-row justify-start w-full ">
        <div className="relative w-full">
          <BackButton
            onClick={() => navigate(-1)}
            color="#d9d9d9"
            size={50}
            className="absolute left-3 top-3 bg-black rounded-full bg-opacity-50"
          />
          <div className="bg-white/40 backdrop-blur-sm backdrop-filter absolute w-full h-[4rem] font-bold font-tech text-[1.5rem] sm:text-[2rem] md:text-[3rem] bottom-0 pl-5 flex items-center">
            <p> {event.clubName}</p>
          </div>

          <img
            src={event.image}
            className="w-full h-[20rem] sm:h-screen object-cover"
            alt=""
          />
        </div>

        <div className="w-full p-2  h-max md:h-screen flex items-center justify-center flex-col ">
          <p className="text-white text-start w-full pl-3 text-[1.5rem] tracking-wider font-kindle ">{event.name}</p>
          <p className="text-white p-3">
            {event.description}
            
          </p>
          <button
            onClick={() => registerEvent(event._id)}
            className=" font-tech rounded-sm shadow-black w-[247px] h-[57px] top-0 mt-4 bg-white text-black py-2 px-6 hover:bg-gray-100 transition duration-300 text-[1.75rem]"
          >
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}
