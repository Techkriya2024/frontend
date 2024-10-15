import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
const HostelAccommodation = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] pb-[2rem] max-w-[100vw] bg-black-1000 flex flex-col items-center text-white">
      <div className="md:w-[60%] w-[90%] justify-center items-start flex flex-col rounded-lg shadow-lg">
        <div className="flex shadow shadow-black justify-start gap-5 items-center h-[5rem] p-3">
          <button onClick={() => navigate(-1)}>
            <IoChevronBackOutline
              size={40}
              className="border-2 text-black-600 border-black-600  rounded-md p-1"
            />
          </button>
          <p className="text-white font-kindle text-[1.6rem] tracking-wider">
            hostel accommodation
          </p>
        </div>

        <p className="font-kindle">rules and regulations </p>

        <ol className="list-decimal list-inside space-y-2 text-left font-poppins text-white-500 my-[1rem]">
          <li>
            The visitors who want to participate must fill the google form given
            below.
          </li>
          <li>
            Spot registration for hostel accommodation may or may not be
            accepted based on room availability.
          </li>
          <li>
            Room allotment will be done on a first come first serve basis as
            there are only a few rooms available.
          </li>
          <li>
            After registering for their stay in the campus, they will be
            provided with a registration slip which they need to submit on
            visiting the campus to get their visiting ID-cards in return.
          </li>
          <li>
            Accommodation will be provided with one iron cot, mattress and one
            cupboard based on the availability.
          </li>
          <li>
            Registration will begin from 14th October 2024 and the registration
            portal will be closed when all the rooms are filled.
          </li>
          <li>
            Visitors should carry their college ID Card and any government ID
            Card (like Aadhaar card, driving license, PAN Card, etc.) – original
            and photocopy & 2 passport size photographs.
          </li>
          <li>
            Registered students have to directly report to the hostel office for
            fee payment and further procedures. (The Hostel office is located at
            the Ground floor of Central vista).
          </li>
          <li>
            The registration fee for staying in the campus is ₹.150 per d0ay
            including food and lodging and the payment can be done through
            cash/UPI.
          </li>
          <li>
            Visitors are responsible for their own valuables & bring their own
            lock & keys.
          </li>
          <li>
            Visitors are not allowed to carry any electrical gadgets like iron,
            electric kettle, immersion rod, etc.
          </li>
          <li>The room will be on a sharing basis.</li>
          <li>
            No visitors will be allowed to stay after 10:00 AM on 20th, October
            2024.
          </li>
          <li>
            All the guests have to strictly adhere to the institute rules,
            regulations, and guidelines.
          </li>
          <li>
            Those who successfully got accommodation are allowed to stay in the
            event after 17:00, and those who failed to get the accommodation are
            permitted to stay in the fest only till 17:00.
          </li>
        </ol>

        <div className="w-full flex justify-center gap-5  items-center flex-col">
          <Link target="_blank" to="https://forms.gle/WyMsJThiSMxTNaXE9">
            <button
              className={`w-[25rem] sm:w-[28rem] tracking-wide   bg-white text-black font-semibold p-2  sm:text-[1.3rem] rounded-lg font-kindle`}
            >
              Register to Attend Techkriya
            </button>
          </Link>{" "}
          <Link target="_blank" to="https://forms.gle/H4CiVVCcW4DJ9Ekt9">
            <button
              className={`w-[25rem] sm:w-[28rem] tracking-wide bg-white text-black font-semibold p-2 sm:text-[1.3rem]  rounded-lg  font-kindle`}
            >
              Register for Accomodation
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default HostelAccommodation;
