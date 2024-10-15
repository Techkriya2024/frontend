import React from 'react';
import Logo from '../assets/ClgLogo.svg';
import WelcomeBtn from '../assets/WelcomeBtn.svg';
import logo from '../assets/Techkriya_White.png'
import BGimg from '../assets/WelcomeBG.jpeg';
import { useNavigate } from 'react-router-dom';

const OnboardingPage1 = () => {

  const navigate = useNavigate();
  return (
    <div
      className='w-[100vw] min-h-[100vh] bg-[#131313] flex'
      style={{
        backgroundImage: `url(${BGimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='relative w-[90%] mx-auto mt-[2rem]'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex justify-between sm:justify-start items-center gap-[0.5rem]'>
            <img src={Logo} className='h-[8vh]' alt="NIT AP Logo" />
            <div className='h-[8vh] bg-white w-[1px]'></div>
            <div className='flex justify-center align-top flex-col gap-[0.3rem]'>
              <p className='text-white font-poppins font-medium text-[0.95rem] text-wrap'>National Institute of Technology</p>
              <p className='text-white font-poppins font-normal text-[0.95rem] text-wrap'>Andhra Pradesh</p>
            </div>
          </div>
          <div className=' hidden sm:flex justify-center gap-2 items-center'>
            <p className='font-tech text-[1.5rem] text-white'>TECHKRIYA</p>
            <img src={logo} className='h-[2rem]' alt="" />
          </div>
          {/* <img src={MainLogo} className='sm:block hidden' alt="TechKriya Logo" /> */}
        </div>

        <div className='w-full absolute flex sm:justify-around justify-center sm:flex-row flex-col gap-[3rem] left-0 right-0 sm:bottom-20 bottom-4'>
          <div className='flex flex-col gap-[1rem] justify-center items-start'>
            <p className='font-kindle text-white text-[2rem]'>welcome</p>
            <p className='text-base text-[#d0d0d0] opacity-70 font-light font-poppins'>NIT Andhra invites you to it's annual <br /> technical event: <span className='font-tech text-[1.2rem]'>TECHKRIYA'24</span></p>
          </div>
          <div className='flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300'>
            <img src={WelcomeBtn} alt="Welcome Button" onClick={() => navigate("/onboarding2")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage1;
