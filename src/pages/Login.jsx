import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../services/operations/authAPI';
import logo from '../assets/TechkriyaLogoText.svg';
import Rectangle from '../assets/RectShp.svg';
import Vector from '../assets/ArrowLeft.svg';
import LoginTxt from '../assets/LoginTxt.svg';
import Btn from '../assets/GetStartedTxt.svg';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    await dispatch(login(email, password, navigate));
  }

  return (
    <div className='max-w-[100vw] min-h-[100vh] bg-[#131313] flex'>
      <div className='relative w-[90%] mx-auto mt-[2rem]'>

        <div className="flex flex-col items-center min-h-screen bg-richblack1-900 text-white p-4 sm:p-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center w-full max-w-md py-3 mt-7">
            <div className='relative'>
              <button onClick={() => navigate('/signup')}>
                <img src={Vector} className='absolute top-0 translate-y-[14px] -translate-x-1' />
                <img src={Rectangle} className='translate-x-[-20px]' />
              </button>
            </div>
            <img src={logo} alt="logo" />
          </div>

          <div className="flex flex-col items-start w-full max-w-md gap-y-2 mt-6">
            <h1 className="font-bold text-2xl md:text-3xl font-poppins">Welcome Back 👋</h1>
            <p className="text-gray-300 font-poppins">Please enter your credentials to continue</p>
          </div>

          <div className="w-full max-w-lg mt-5 relative">
            <div className="absolute font-poppins sm:-top-0 sm:-left-[0.1px] -top-[0.5px] -left-[1px] border-r-2 py-1 border-b-2 border-white rounded-br-lg bg-black-1000 px-9 text-lg uppercase font-semibold">
                <img src={LoginTxt} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col gap-y-4 border-2 border-white p-10 py-20 sm:py-20 rounded-lg">
                <label className="text-white font-poppins ">
                  Email
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    {...register("email", { required: "Email is required" })}
                    className="w-full placeholder:opacity-60 font-poppins mt-1 p-2 rounded-lg border border-richblack1-200 bg-black-700 text-white"
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
                    className="w-full mt-1 placeholder:opacity-60 bg-black-700 font-poppins p-2 rounded-lg border border-richblack1-200 bg-richblack1-800 text-white"
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </label>
              </div>

              <div className="absolute -bottom-[1px] sm:bottom-0 sm:right-0 -right-[1px]  flex items-center">
                <div className="flex justify-center border-l-2 border-t-2 border-white rounded-tl-lg bg-black-1000 text-white px-4 py-2 sm:px-3 sm:py-2 text-lg uppercase font-semibold">
                  <button type="submit" className='bg-white font-poppins rounded-md text-black-1000 py-2 px-10 hover:scale-105 transition-all duration-200'>
                    <img src={Btn} />
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-8 text-sm font-poppins">
              Don't have an account? {" "}
              <button onClick={() => navigate('/signup')} className="font-poppins text-green-500 hover:underline">
                Sign up
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
