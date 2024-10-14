import React, { useEffect, useState } from 'react'
import Vector from '../assets/ArrowLeft.svg';
import OTPInput from 'react-otp-input'
import OTPImage1 from '../assets/Enter OTP-amico 1.svg'
import MainLogo from '../assets/TechkriyaLogoText.svg'
import Btn from '../assets/GetStartedTxt.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {

  const [OTP,setOTP] = useState();
  const {signupData} = useSelector((state) => state.Auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!signupData){
      navigate("/signup");
      return
    }
  },[])

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const {name,email,password,year,college,reg_no,outsider,image} = signupData;

    await dispatch(signUp(name,email,password,year,college,reg_no,outsider,image,OTP,navigate));
    
  }

  return (
  <div className='lg:w-[100vw] lg:h-[100vh] mx-auto w-screen min-h-[100vh] bg-black-1000 overflow-x-hidden'>
    <div className='relative w-[90%] mx-auto  flex flex-row py-8 justify-between items-center overflow-hidden'>
        <Link to={"/"}>
          <div className='flex text-center justify-center items-center md:border-[3px] border-2 border-black-700 rounded-lg '>
              <img src={Vector} />
          </div>
        </Link>
        <img src={MainLogo} alt='TechriyaNameLogo'/>
    </div>
    <img src={OTPImage1} alt='OTPImage' className='md:w-[480px] md:h-[500px] w-[280px] h-[350px] mx-auto flex flex-row items-center justify-center py-10 '/>
    <div className='w-5/6 mx-auto'>
      <div className=' flex flex-col justify-start lg:text-center mx-auto'>
        <div className='text-white font-semibold text-2xl'>
          OTP VERIFICATION
        </div>
        <p className='text-md text-gray-500 py-2'>
          Enter one time password that has been sent to email ID.
        </p>
      </div>

      <div className=' mx-auto my-5'>
        <form className='flex flex-col  mx-auto items-center'>
                <OTPInput value={OTP} onChange={setOTP} numInputs={6}
                renderInput={(props) =>
                <input {...props} placeholder='-' />}
                inputStyle={{width:"15%",height:"50px",maxHeight:"50px",maxWidth:"50px",borderRadius:"0.5rem",backgroundColor:"#161D29",borderBottom:"2px solid #424854",color:"#F1F2FF",}}
                containerStyle={{justifyContent:"space-between",gap:"0.6px",}}
                shouldAutoFocus={true}
                />
        </form>
      </div>
    </div>
    <img src={Btn} className='mx-auto flex justify-center items-center mt-12 mb-7' onClick={SubmitHandler} />
    <div className='flex flex-row gap-2 justify-center items-center'>
      <p className='text-gray-600 text-center font-poppins lg:py-4'>Didn't you receive the OTP ?</p>
      <button className="text-green-500 font-poppins">Resend OTP</button>
    </div>
  </div>

  )
}

export default VerifyEmail