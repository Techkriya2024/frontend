import toast from 'react-hot-toast'
import {endpoints} from '../APIs'
import { APIconnector } from '../APIconnector';
import { setToken } from '../../reducer/slices/authSlice';
import { setUser } from '../../reducer/slices/profileSlice';

const {SENDOTP_API,SIGNUP_API,LOGIN_API,RESETPASSTOKEN_API,RESETPASSWORD_API,} = endpoints

export function sendOTP(email,navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Please Wait...");
        try{
            const response = await APIconnector("POST",SENDOTP_API,{email});

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("SuccessFully sent OTP");
            navigate("/verifyEmail");
        }catch(e){
            toast.error("Could Not Send OTP");
        }

        toast.dismiss(toastId);
    }
}

export function signUp(name,email,password,year,college,reg_no,outsider,image,OTP,navigate){
    return async(dispatch) =>  {
        const toastId = toast.loading("Loading...");
        try{
            const options ={
                name,
                email,
                password,
                year,
                college,
                reg_no,
                outsider,
                image,
                otp:OTP
            }
            const response = await APIconnector("POST",SIGNUP_API,options);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Successfully Created Account");
            navigate("/login");
        }catch(e){
            console.log(e);
            toast.error("Signup Unsuccessful");
            navigate("/signup");
        }
        toast.dismiss(toastId);
    }
}

export function login(email,password,navigate){
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try{
            const options = {
                email:email,
                password:password
            };
            const response = await APIconnector("POST",LOGIN_API,options);

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("Log in Successful !");
            
            dispatch(setToken(response.data.token));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));

            const userImage = response.data.user.image;
            dispatch(setUser({ ...response.data.user, image: userImage }));
            navigate("/home");
        }catch(e){
            toast.error("Account Not Found");
            navigate("/login");
        }
        toast.dismiss(toastId);
    }
}

export function getPasswordResetToken(email,setEmailSent){
    return async(dispatch) => {
        try{
            const options = {
                email:email,
            }

            const emailResponse = await APIconnector("POST",RESETPASSTOKEN_API,options);

            if(!emailResponse.data.success){
                throw new Error(emailResponse.data.message);
            }

            toast.success("Reset Email Sent Successfully");
            setEmailSent(true);

        }catch(e){
            console.log("Cannot fetch password Token");
            toast.error("Failed to send Reset Password Email");
        }
    }
}

export function resetPassword(confirmPassword,confirmNewPassword,token,navigate){
    return async(dispatch) => {
        try{
            const options = {
                newPassword:confirmPassword,
                confirmNewPassword:confirmNewPassword,
                token:token
            };
            console.log(options);
            const response = await APIconnector("POST",RESETPASSWORD_API,options);

            console.log(response.data);
            if(!response.data.success){
                throw new Error("Unable to Reset Password");
            }
            navigate('/resetPasswordSuccess');
            toast.success("Password Reset Successful");
        }catch(e){
            console.log("Password Reset UnsuccessFul",e);
            toast.error("Unable to Reset Password");
        }
    }
}

export function logout(navigate){
    return async (dispatch) => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged Out");
        navigate("/");
    }
}