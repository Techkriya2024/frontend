import React from "react";
import LeftArw from "../assets/ArrowLeft.svg";
import RecShape from '../assets/RectShp.svg';
import MainLogo from '../assets/TechkriyaLogoText.svg';
import EllipseIcon from "../assets/Ellipse8.svg";
import DiveInIcon from "../assets/divein.svg";
import Heading1 from '../assets/AbtNitApTxt.svg';
import Heading2 from '../assets/AboutTechKriyaTxt.svg';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OnboardingPage2 = () => {

  const {token} = useSelector((state) => state.Auth);
  const navigate = useNavigate(); 

  const handleDiveInClick = () => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className='max-w-[100vw] overflow-x-hidden min-h-[100vh] overflow-clip bg-[#131313] flex -z-10'>
        {/* <img src={EllipseIcon} className="absolute" /> */}
      <div className="absolute h-[35rem] w-[35rem] bg-[#3D3D3D] rounded-full -translate-y-[20rem] -translate-x-[15rem] sm:-translate-x-10 z-0"></div>
      <div className='relative w-[90%] mx-auto mt-[2rem]'>
        <div className="w-full flex justify-between items-center">
            <button onClick={()=>navigate(-1)}>
                <img src={LeftArw} className='absolute top-0 translate-y-[14px] -translate-x-1' />
                <img src={RecShape} className=' translate-x-[-20px]' />
            </button>
            <img src={MainLogo} />
        </div>
        <div className="md:w-[60%] w-[95%] mt-[10rem] mx-auto flex flex-col justify-center items-center gap-[2rem]">
            <div className="flex flex-col justify-start items-start gap-[1rem]">
                <img src={Heading1} className="sm:h-[1rem]" />
                <p className="text-[0.8rem] sm:text-[1rem] text-white-500 font-poppins font-light">NIT, Andhra Pradesh is Centrally Funded Technical
                    Autonomous Institute of the Ministry of Education,
                    Government of India functioning in the country
                    as an ‘Institution of National Importance’
                </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-[1rem]">
                <img src={Heading2} className="sm:h-[1rem]" alt=""/>
                <p className="text-[0.8rem] sm:text-[1rem] text-white-500 font-poppins font-light">TechKriya’24 is the National Institute of Technology,
                    Andhra Pradesh annual technological festival.
                    This event aims to be a spectacular blend of
                    technological innovation and entertainment,
                    with a diverse range of technical activities for
                    students and enthusiasts.
                </p>
            </div>
        </div>
        <div className="absolute bottom-6 w-full justify-center items-center flex">
            <img onClick={handleDiveInClick} alt="" src={DiveInIcon} className="cursor-pointer hover:scale-105 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage2;