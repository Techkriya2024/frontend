import React from "react";
import RegisterHereIcon from "../assets/registerhere.svg";
import VectorIcon from "../assets/ArrowLeft.svg";
import HostelAccTxt from "../assets/HostelAccTxt.svg";
import RulesAndRefTxt from "../assets/RulesAndRegTxt.svg";

const HostelAccommodation = () => {
  return (
    <div className="min-h-[100vh] pb-[2rem] max-w-[100vw] bg-black-1000 flex flex-col items-center text-white">
      <div className="md:w-[60%] w-[90%] justify-center items-center flex flex-col rounded-lg shadow-lg">
        <div className="w-full flex items-center justify-center py-[1rem] mb-4 border-b-[1px] border-white-100">
          <img src={HostelAccTxt} />
        </div>

        <img src={RulesAndRefTxt} />

        <ol className="list-decimal list-inside space-y-2 text-left font-poppins text-white-500 my-[1rem]">
          <li>
            The visitors who want to participate must fill the google form given
            below.
          </li>
          <li>
          Spot registration for hostel accommodation may or may not be accepted based on room availability.
          </li>
          <li>
          Room allotment will be done on a first come first serve basis as there are only a few rooms available.
          </li>
          <li>
          After registering for their stay in the campus, they will be provided with a registration slip which they need to submit on visiting the campus to get their visiting ID-cards in return.
          </li>
          <li>
          Accommodation will be provided with one iron cot, mattress and one cupboard based on the availability.
          </li>
          <li>
          Registration will begin from 14th October 2024 and the registration portal will be closed when all the rooms are filled.
          </li>
          <li>
          Visitors should carry their college ID Card and any government ID Card (like Aadhaar card, driving license, PAN Card, etc.) – original and photocopy & 2 passport size photographs.
          </li>
          <li>
          Registered students have to directly report to the hostel office for fee payment and further procedures. (The Hostel office is located at the Ground floor of Central vista).
          </li>
          <li>The registration fee for staying in the campus is ₹.150 per d0ay including food and lodging and the payment can be done through cash/UPI.</li>
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
          No visitors will be allowed to stay after 10:00 AM on 20th, October 2024.
          </li>
          <li>
            All the guests have to strictly adhere to the institute rules,
            regulations, and guidelines.
          </li>
          <li>
          Those who successfully got accommodation are allowed to stay in the event after 17:00, and those who failed to get the accommodation are permitted to stay in the fest only till 17:00.
          </li>
        </ol>

        <div className="mt-6 flex justify-center">
          <img
            src={RegisterHereIcon}
            alt="Register Here"
            className="w-32 h-auto cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default HostelAccommodation;
