import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setSignupData } from '../reducer/slices/authSlice';
import logo from '../assets/Techkriya_White.png';
import {IoChevronBackOutline} from "react-icons/io5"
import SignupTxt from '../assets/SignupTxt.svg'
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    const { email, password, confirmpassword } = data;
    if(!email || !password || !confirmpassword){
        toast.error("Fill all data");
        return;
    }
    if(password !== confirmpassword){
        toast.error("Passwords are Not Matching !");
        return;
    }

    dispatch(setSignupData(data));
    navigate("/updateProfile");
  };

  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-black-1000 flex'>
      <div className='relative w-[90%] mx-auto mt-[2rem]'>

        <div className="flex flex-col items-center min-h-screen bg-richblack1-900 text-white p-4 sm:p-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center w-full max-w-md py-3 mt-7">
            <div className='relative'>
            <button onClick={() => navigate('/signup')}>
                {/* <img src={Vector} alt="" className='absolute top-0 translate-y-[14px] -translate-x-1' /> */}
                {/* <img src={Rectangle} alt="" className='translate-x-[-20px]' /> */}
            <IoChevronBackOutline
              size={40}
              className="border-2 text-black-600 border-black-600 rounded-md p-1"
            />
              </button>
            </div>
            <div className='flex justify-center gap-2 items-center'>
            <p className='font-tech text-[1.5rem] text-white'>TECHKRIYA</p>
            <img src={logo} className='h-[2rem]' alt="" />
          </div>          </div>

          <div className="flex flex-col items-start w-full max-w-md gap-y-2 mt-6">
            <h1 className="font-bold text-2xl sm:text-3xl font-poppins">Nice to meet you 👋</h1>
            <p className="text-gray-300 font-poppins">Please fill up the below form to continue</p>
          </div>

          <div className="w-full max-w-lg mt-5 relative">
            <img src={SignupTxt} alt='signup' className='mb-2'/>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
              <div className="flex flex-col gap-y-4 border-2 border-white p-10 py-20 sm:py-20 rounded-lg">
                <label className="text-white font-poppins w-full">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full placeholder:opacity-60 font-poppins mt-1 p-2 rounded-lg border border-white-100 bg-black-700 text-white"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </label>

                <label className="text-white font-poppins">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full mt-1 placeholder:opacity-60 font-poppins p-2 rounded-lg border border-richblack1-200 bg-black-700 text-white"
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </label>

                <label className="text-white font-poppins">
                  Confirm Password
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    {...register("confirmpassword", {
                      required: "Confirm Password is required",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                    className="w-full placeholder:opacity-60 font-poppins mt-1 p-2 rounded-lg border border-richblack1-200 bg-black-700 text-white"
                  />
                  {errors.confirmpassword && <p className="text-red-500">{errors.confirmpassword.message}</p>}
                </label>
              </div>

              <div className="absolute -bottom-[1px] sm:bottom-0 sm:right-0 -right-[1px] flex items-center">
                <div className="flex justify-center border-l-2 border-t-2 border-white rounded-tl-lg bg-black-1000 text-white px-4 py-2 sm:px-3 sm:py-2 text-lg uppercase font-semibold ">
                <button type="submit" className='font-kindle tracking-wide bg-white  rounded-md text-black-1000 py-2 px-10 hover:scale-105 transition-all duration-200'>

                    GET STARTED
                  </button>
                </div>
              </div>
            </form>

           
          </div>
          <p className="font-poppins mt-8 text-sm">
              Already have an account?{" "}
              <button onClick={() => navigate('/login')} className="text-green-500 hover:underline">
                Login
              </button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
