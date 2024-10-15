import toast from 'react-hot-toast'
import {userEndPoints} from '../APIs'
import { APIconnector } from '../APIconnector';
import { setToken } from '../../reducer/slices/authSlice';
import { setUser } from '../../reducer/slices/profileSlice';

const {REGISTER_FOR_AN_EVENT_API} = userEndPoints;

export function registerForEvent(eventId,token){
    return async(dispatch) => {
        const toastId = toast.loading("Please Wait...");
        try{
            const response = await APIconnector("POST",REGISTER_FOR_AN_EVENT_API,{eventId},{Authorization: `Bearer ${token}`});

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("SuccessFully Registered for the Event");
        }catch(e){
            toast.error("Could Not Register for the event");
        }
        toast.dismiss(toastId);
    }
}