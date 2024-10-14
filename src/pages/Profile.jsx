import React, { useState } from 'react'
import Heading from '../assets/ProfileHeading.svg'
import LeftArw from '../assets/ArrowLeft.svg'
import RightArw from '../assets/ArrowRight.svg'
import MaleAtr from '../assets/MaleAtr.svg'
import FemaleAtr from '../assets/FemaleAtr.svg'
import EditProfileBtn from '../assets/EditProfileBtn.svg'
import GeneralTxt from '../assets/GeneralTxtProfile.svg'
import ThankTxt from '../assets/ThanksTxtProfile.svg'
import DevIcon from '../assets/GeneralDev.svg'

const Profile = () => {

    const [atrChoice, setAtrChoice] = useState(1);

  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-[#131313] flex'>
      <div className='relative w-[90%] mx-auto mt-[2rem]'>
        <div className='w-full flex flex-row justify-between items-center pb-[1rem] border-b-[1px] border-white-200'>
            <img src={LeftArw} />
            <img src={Heading} />
            <div />
        </div>
        <div className='w-full flex flex-col gap-[0.5rem] justify-center items-center py-[2rem]'>
            <div className='border-[1px] border-white-500 rounded-full p-[0.5rem] border-dashed'>
                <div className='border-[1px] border-white-500 rounded-full p-[0.5rem] border-dotted'>
                    <img src={atrChoice===1 ? MaleAtr : FemaleAtr} />
                </div>
            </div>
            <div className='text-[1.25rem] text-white-500 font-medium'>Sai Chandra</div>
            <div className='text-[1rem] text-white-500 font-light'>721125@student.nitandhra.ac.in</div>
            <img src={EditProfileBtn} className='hover:scale-105 transition-all duration-200 cursor-pointer' />
        </div>
        <div className='w-full flex gap-[1rem] justify-stretch items-center'>
            <img className='w-[25%]' src={GeneralTxt} />
            <div className='w-[60%] h-[2px] bg-gradient-to-r from-green-500 to-black'></div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-[0.5rem] pt-[1rem] pb-[4rem]'>
            <div className='w-full flex flex-row justify-between items-center px-[1rem] py-[1rem] bg-black-800 rounded-lg'>
                <div className='flex gap-[1rem] justify-start items-center'>
                    <div className='rounded-full bg-black-600 px-[1.2rem] py-[1rem]'>
                        <img src={DevIcon} />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-black-300 text-[1rem] font-medium'>Developers</p>
                        <p className='text-black-300 text-[0.9rem]'>Know Your Developers</p>
                    </div>
                </div>
                <img className='hover:scale-105 transition-all duration-200 cursor-pointer' src={RightArw} />
            </div>
            <div className='w-full flex flex-row justify-between items-center px-[1rem] py-[1rem] bg-black-800 rounded-lg'>
                <div className='flex gap-[1rem] justify-start items-center'>
                    <div className='rounded-full bg-black-600 px-[1.2rem] py-[1rem]'>
                        <img src={DevIcon} />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='text-black-300 text-[1rem] font-medium'>Developers</p>
                        <p className='text-black-300 text-[0.9rem]'>Know Your Developers</p>
                    </div>
                </div>
                <img className='hover:scale-105 transition-all duration-200 cursor-pointer' src={RightArw} />
            </div>
        </div>
        <img src={ThankTxt} />
      </div>
    </div>
  )
}

export default Profile