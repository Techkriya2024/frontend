import React, { useState,useEffect } from "react";
import MaleAtr from "../assets/MaleAtr.svg";
import FemaleAtr from "../assets/FemaleAtr.svg";
import {BASE_URL} from "../services/APIs"
import axios from "axios";
import { IoChevronBackOutline } from "react-icons/io5";
import ThankTxt from "../assets/ThanksTxtProfile.svg";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [atrChoice, setAtrChoice] = useState(1);
  const user = localStorage.getItem("user");
  const data = JSON.parse(user);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [coins,setCoins]=useState(0);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = BASE_URL+"/user/fetchRank";
        const response = await axios.get(
            url, // The URL you're requesting
            {
              headers: {
                Authorization: `Bearer ${token}`, // Authorization header with the token
              },
            }
          );          
        setCoins(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [token]); 

  return (
    <div className="max-w-[100vw] min-h-[100vh] bg-[#131313] flex pb-5">
      <div className="relative w-[90%] mx-auto">
        {/* <div className='w-full flex flex-row justify-between items-center pb-[1rem] border-b-[1px] border-white-200'>
            <img src={LeftArw} />
            <img src={Heading} />
        </div> */}
        <div className="flex shadow shadow-black justify-start gap-5 items-center h-[5rem] p-3">
          <button onClick={() => navigate(-1)}>
            <IoChevronBackOutline
              size={40}
              className="border-2 text-black-600 border-black-600  rounded-md p-1"
            />
          </button>
          <p className="text-white font-kindle text-[1.6rem] tracking-wider">
            PROFILE
          </p>
        </div>
        <div className="w-full flex flex-col gap-[0.5rem] justify-center items-center py-[2rem]">
          <div className="border-[1px] border-white-500 rounded-full p-[0.5rem] border-dashed">
            <div className="border-[1px] border-white-500 rounded-full p-[0.5rem] border-dotted">
              <img alt="" src={atrChoice === 1 ? MaleAtr : FemaleAtr} />
            </div>
          </div>
          <div className="text-[1.25rem] text-white-500 font-medium uppercase">
            {data.name}
          </div>
          
          <div className="text-[1.25rem] flex text-white-500 font-medium">
           {coins}
            {!loading?( "🪙"):<p className="animate-wiggle">🪙</p>}
            
          </div>
          <div className="text-[1rem] text-white-500 font-light">
            {data.email}
          </div>
          {/* <img src={EditProfileBtn} className='hover:scale-105 transition-all duration-200 cursor-pointer' /> */}
          {/* <p className="font-kindle text-black bg-white  text-[1.4rem] px-6 py-2 rounded-md">
            EDIT PROFILE
          </p> */}
        </div>
        <div className="w-full flex gap-[1rem] justify-stretch items-center">
          {/* <img className='w-[25%]' src={GeneralTxt} /> */}
          <p className="font-kindle text-white w-[7rem] sm:w-[16rem]  text-[1.25rem] tracking-wide sm:text-[3rem] px-6 py-2 rounded-md">
            GENERAL
          </p>
          <p></p>
          <div className="w-[60%] h-[2px] bg-gradient-to-r from-green-500 to-black"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-[0.5rem] pt-[1rem] pb-[4rem]">
        
          <div className="flex flex-col gap-5 justify-center items-start">
              <Link to="registeredEvents">
            <p className="font-kindle text-black bg-white w-[20rem] text-center  text-[1.25rem] tracking-wide  px-6 py-2 rounded-md">
              Registered Events
            </p>
              </Link>
              <Link to="visitedEvents">
            <p className="font-kindle text-black bg-white  w-[20rem] text-center text-[1.25rem] tracking-wide  px-6 py-2 rounded-md">
              Visited Events
            </p>
              </Link>
          </div>
        </div>
        <img src={ThankTxt} alt=""/>
      </div>
    </div>
  );
};

export default Profile;
