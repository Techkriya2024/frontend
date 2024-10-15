import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/Techkriya_White.png";
import { IoChevronBackOutline } from "react-icons/io5";
const OnboardingPage2 = () => {
  const { token } = useSelector((state) => state.Auth);
  const navigate = useNavigate();

  const handleDiveInClick = () => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-[100vw] overflow-x-hidden min-h-[100vh] overflow-clip bg-[#131313] flex -z-10">
      {/* <img src={EllipseIcon} className="absolute" /> */}
      <div className="absolute h-[90vh] sm:h-screen  w-full bg-[#3D3D3D] rounded-full -translate-y-[30rem]  -translate-x-11 z-0"></div>
      <div className="relative w-[90%] mx-auto mt-[2rem]">
        <div className="w-full flex justify-between items-center">
          <button onClick={() => navigate(-1)}>
            <IoChevronBackOutline
              size={40}
              className="border-2 text-black-600 border-black-600 rounded-md p-1"
            />
          </button>
          {/* <img src={MainLogo} /> */}
          <div className=" flex justify-center gap-2 items-center">
            <p className="font-tech text-[1.5rem] text-white">TECHKRIYA</p>
            <img src={logo} className="h-[2rem]" alt="" />
          </div>
        </div>
        <div className="md:w-[60%] w-[95%] mt-[10rem] mx-auto flex flex-col justify-center items-center gap-[2rem]">
          <div className="flex flex-col justify-start items-start gap-[1rem]">
            {/* <img src={Heading1} className="sm:h-[1rem]" /> */}
            <p className="font-kindle text-white text-[1.1rem] sm:text-[1.75rem]">
              about nit andhra pradesh
            </p>
            <p className="text-[0.8rem] sm:text-[1rem] text-white-500 font-poppins font-light">
              NIT, Andhra Pradesh is Centrally Funded Technical Autonomous
              Institute of the Ministry of Education, Government of India
              functioning in the country as an ‘Institution of National
              Importance’
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-[1rem]">
            <p className="font-kindle text-white text-[1.1rem] sm:text-[1.75rem]">
              about <span className="font-tech">TECHKRIYA</span>
            </p>

            <p className="text-[0.8rem] sm:text-[1rem] text-white-500 font-poppins font-light">
              TechKriya’24 is the National Institute of Technology, Andhra
              Pradesh annual technological festival. This event aims to be a
              spectacular blend of technological innovation and entertainment,
              with a diverse range of technical activities for students and
              enthusiasts.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 w-full justify-center items-center flex">
          <button
            onClick={handleDiveInClick}
            alt=""
         
            className="cursor-pointer font-kindle bg-white px-2 py-1 text-[1.5rem] rounded-md hover:scale-105 transition-all duration-200"
          >
            DIVE IN
            </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage2;
