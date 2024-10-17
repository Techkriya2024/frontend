import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MenuBar from './MenuBar';
import Home from './Home';
import { VscSymbolEvent } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { visitEvent } from '../services/operations/userAPI';

const MainPage = () => {
  const [menu, setMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  
  const settingMenu = () => {
    setMenu(!menu);
  };

  const onSubmit = async(data) => {
    await dispatch(visitEvent(data?.eventId,token));
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <Home settingmenu={settingMenu} />
        <MenuBar settingmenu={settingMenu} menu={menu} />
      </div>

      <button
        className="fixed bottom-6 right-6 bg-white-100 text-black-900 p-4 rounded-full shadow-lg hover:bg-white-300 hover:scale-105 transition-all duration-200"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className='flex gap-[0.75rem] justify-center items-center'>
          <VscSymbolEvent className='text-black-900' />
          <p className='font-semibold text-black text-[1rem]'>Visit Event</p>
        </div>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold text-center">Visit an Event</h2>
            <p className='text-[0.8rem] font-medium text-center text-black-500 mb-[1rem]'>Enter Event Id of the event you want to visit, to proceed.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-[1rem] font-semibold text-black-700 mb-2">Event ID</label>
                <input
                  type="text"
                  {...register('eventId', { required: true })}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter Event Id"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black-900 text-white px-4 py-2 rounded hover:bg-black-700 transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
