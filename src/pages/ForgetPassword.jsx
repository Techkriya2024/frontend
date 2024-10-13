import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ForgetPassword() {

    const[data,setData] = useState({email:""});
    function changeHandler(event) {
        setData((prevData) => {
            return{
                ...prevData,
                [event.target.name] : event.target.value,
            }
        })
    }

    function SubmitHandler(e){
        e.preventDefault();
        console.log(data);
    }

  return (
    <div className='lg:w-[100vw] lg:h-[100vh] mx-auto w-screen min-h-[100vh] bg-[#131313] overflow-x-hidden font-poppins'>
        <NavBar/>
        <div className='w-11/12 mx-auto flex flex-col'>
            <div className='w-3/4 flex flex-col md:pt-24 pt-12 mx-auto '>
                <div className='text-3xl text-white-500 pb-4 font-semibold '>
                    Reset Your Password
                </div>
                <p className='text-black-400'>
                    Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery
                </p>
            </div>
            <label className='w-3/4 gap-2 mx-auto flex flex-col my-5 '>
                <p className='text-white-200 font-bold text-lg'>Email Address</p>
                <input
                    name='email'
                    className='bg-black-700 text-white-200 p-2 rounded-md border-black-800 md:w-1/2'
                    placeholder='Enter Your Email'
                    required
                    type='email'
                    value={data.email}
                    onChange={changeHandler}>
                </input>
            </label>
            <button className='w-3/4 mx-auto flex md:justify-start justify-center items-center mt-5 mb-6' onClick={SubmitHandler}>
                <Button children={"Reset Password"}/>
            </button>
            <Link to={"/"}>
                <div className='md:w-3/4 md:mx-auto flex items-center justify-center md:justify-start gap-2 text-lg'>
                    <FaArrowLeft color='white'/>
                    <spam className="text-white">Back To Signup</spam>
                </div>
            </Link>
        </div>

    </div>
  )
}

export default ForgetPassword