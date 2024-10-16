import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import MaleAtr from '../assets/MaleAtr.svg';
import FemaleAtr from '../assets/FemaleAtr.svg';
import SubmitBtn from '../assets/UpdateProfileBtn.svg';
import { sendOTP } from '../services/operations/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setSignupData } from '../reducer/slices/authSlice';

const UpdateProfile = () => {
  const [imageChoice, setImageChoice] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {signupData} = useSelector((state) => state.Auth);

  const onSubmit = async (data) => {

    if(!imageChoice){
      toast.error("Select an Avatar");
      return;
    }

    const currentSignupData = signupData || {};

    const updatedSignupData = {
      ...currentSignupData,
      ...data,
      image:imageChoice,

    };

    await dispatch(setSignupData(updatedSignupData));

    if(!signupData?.email){
      toast.error("Unable to Send OTP");
      return;
    }

    try{
      await dispatch(sendOTP(signupData?.email, navigate));
    }catch(error){
      toast.error("Failed to send OTP");
    }
  };

  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-[#131313] flex'>
      <div className='relative w-[90%] mx-auto mt-[2rem]'>
        <div className='w-[100%] text-white text-[2rem] pb-[0.5rem] border-b-[1px] border-[#ffffff90]'>
          Update Profile
        </div>
        <div className='text-white text-[14px] py-[1rem] font-light tracking-wider'>
          Please update your details to continue
        </div>

        <div className='sm:w-[60%] w-[100%] mx-auto flex flex-row justify-around items-center my-[3rem]'>
          <div className={`p-[0.75rem] ${imageChoice === 1 ? 'border-[1px] border-white rounded-full border-dashed' : ''}`} onClick={() => setImageChoice(1)}>
            <img alt='' src={MaleAtr} className='hover:scale-110 sm:w-[7rem] w-[5rem] transition-all duration-300 cursor-pointer' />
          </div>
          <div className={`p-[0.75rem] ${imageChoice === 2 ? 'border-[1px] border-white rounded-full border-dashed' : ''}`} onClick={() => setImageChoice(2)}>
            <img alt='' src={FemaleAtr} className='hover:scale-110 sm:w-[7rem] w-[5rem] transition-all duration-300 cursor-pointer' />
          </div>
        </div>

        <form className='mt-[2rem] mb-[3rem] mx-auto sm:w-[40%] w-[100%] flex flex-col justify-center items-center gap-[1rem]' onSubmit={handleSubmit(onSubmit)}>
          
          <label className='w-full text-white text-[1rem] font-poppins'>
            Name<sup className='text-[red] text-[0.85rem]'>*</sup>
            <input
              className='w-full mt-[0.3rem] bg-black text-white placeholder-gray-500 py-[0.5rem] px-[1rem] rounded-lg border-[1px] border-gray-300'
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </label>

          <label className='w-full text-white text-[1rem] font-poppins'>
            Registration Number<sup className='text-[red] text-[0.85rem]'>*</sup>
            <input
              className='w-full mt-[0.3rem] bg-black text-white placeholder-gray-500 py-[0.5rem] px-[1rem] rounded-lg border-[1px] border-gray-300'
              placeholder="Enter Registration Number"
              {...register("reg_no", { required: true })}
            />
            {errors.reg_no && <span className="text-red-500">Registration Number is required</span>}
          </label>

          <label className='w-full text-white text-[1rem] font-poppins'>
            College Info<sup className='text-[red] text-[0.85rem]'>*</sup>
            <input
              className='w-full mt-[0.3rem] bg-black text-white placeholder-gray-500 py-[0.5rem] px-[1rem] rounded-lg border-[1px] border-gray-300'
              placeholder="Enter College Name"
              {...register("college", { required: true })}
            />
            {errors.college && <span className="text-red-500">College Info is required</span>}
          </label>

          <label className='w-full text-white text-[1rem] font-poppins'>
            Year<sup className='text-[red] text-[0.85rem]'>*</sup>
            <select
              className='w-full mt-[0.3rem] bg-black text-white py-[0.5rem] px-[1rem] rounded-lg border-[1px] border-gray-300'
              {...register("year", { required: true })}
            >
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
            {errors.year && <span className="text-red-500">Year is required</span>}
          </label>

          <label className='w-full flex gap-[2rem] items-center text-white text-[1rem] font-poppins'>
            <div>
              Outsider<sup className='text-[red] text-[0.85rem]'>*</sup>
            </div>
            <div className="flex gap-6 mt-[0.3rem]">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  {...register("outsider", { required: true })}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex justify-center items-center transition-all duration-300 peer-checked:bg-white">
                  <div className="w-3 h-3 bg-transparent rounded-full peer-checked:bg-black transition-all duration-300"></div>
                </div>
                <span className="ml-2 text-white">Yes</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  {...register("outsider", { required: true })}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex justify-center items-center transition-all duration-300 peer-checked:bg-white">
                  <div className="w-3 h-3 bg-transparent rounded-full peer-checked:bg-black transition-all duration-300"></div>
                </div>
                <span className="ml-2 text-white">No</span>
              </label>
            </div>
            {errors.outsider && <span className="text-red-500">Outsider status is required</span>}
          </label>

          <img alt='' onClick={handleSubmit(onSubmit)} src={SubmitBtn} className='hover:scale-105 transition-all duration-200 cursor-pointer' />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
