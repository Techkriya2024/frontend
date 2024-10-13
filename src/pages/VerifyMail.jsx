import React, { useState } from 'react'
import NavBar from "../components/NavBar"
import Button from "../components/Button"
import OTPInput from 'react-otp-input'
import OTPImage1 from '../assets/Enter OTP-amico 1.svg'

function Otp() {

  const [OTP,setOTP] = useState();

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(OTP);
  }

  return (
  <div className='lg:w-[100vw] lg:h-[100vh] mx-auto w-screen min-h-[100vh] bg-black-1000 overflow-x-hidden'>
    <NavBar/>
    <img src={OTPImage1} alt='OTPImage' className='md:w-[480px] md:h-[500px] w-[280px] h-[350px] mx-auto flex flex-row items-center justify-center py-10 '/>
    <div className='w-5/6 mx-auto'>
      <div className=' flex flex-col justify-start lg:text-center mx-auto'>
        <div className='text-white font-semibold text-2xl'>
          OTP VERIFICATION
        </div>
        <p className='text-md text-gray-500 py-2'>
          Enter one time password that has been sent to email_id
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
    <button className='mx-auto flex justify-center items-center mt-12 mb-7' onClick={SubmitHandler}><Button children={'Submit'}/></button>
    <div className='flex flex-row gap-2 justify-center items-center'>
      <p className='text-gray-600 text-center lg:py-4'>Didn't you recive the OTP ?</p>
      <button className="text-green-500">Resend OTP</button>
    </div>
  </div>

  )
}

export default Otp