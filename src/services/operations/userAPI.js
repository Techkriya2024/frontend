import toast from 'react-hot-toast'
import {userEndPoints} from '../APIs'
import { APIconnector } from '../APIconnector';
import { setToken } from '../../reducer/slices/authSlice';
import { setUser } from '../../reducer/slices/profileSlice';

const {REGISTER_FOR_AN_EVENT_API,VISIT_AN_EVENT_API} = userEndPoints;

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

export function visitEvent(eventId,token){
    return async(dispatch) => {
        const toastId = toast.loading("Please Wait...");
        try{
            const response = await APIconnector("POST",VISIT_AN_EVENT_API,{eventId},{Authorization: `Bearer ${token}`},{eventId});

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("SuccessFully Visited the Event");
        }catch(e){
            toast.error("Unable to Visit the Event");
        }
        toast.dismiss(toastId);
    }
}

