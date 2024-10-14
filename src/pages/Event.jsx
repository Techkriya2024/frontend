import { useLocation } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline as BackButton } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
export default function Event() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const registerEvent = async (id) => {
    
    toast("Registering");
    let url =
      "http://localhost:4000/api/v1/user/register/"+id;
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      )
      toast(response.data.message);

    } catch (error) {
      if (error.response) {
        toast(error.response.data.message)

      }
    }
  };
  const event = location.state;
  return (
    <>
      <div className="bg-[#131313] h-max min-h-screen relative  flex flex-col justify-start w-full ">
        <div className="relative w-full">
          <BackButton
            onClick={() => navigate(-1)}
            color="#d9d9d9"
            size={50}
            className="absolute left-3 top-3 bg-black rounded-full bg-opacity-50"
          />
          <div className="bg-white/40 backdrop-blur-sm backdrop-filter absolute w-full h-[4rem] font-bold font-tech text-[1.5rem] sm:text-[2rem] md:text-[3rem] bottom-0 pl-5 flex items-center">
            <p> {event.name}</p>
          </div>

          <img
            src={event.image}
            className="w-full h-[20rem] sm:h-[23rem] object-cover"
            alt=""
          />
        </div>

        <div className="w-full p-2  h-max flex items-center flex-col ">
          <p className="text-white p-3">
            {event.description}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, deserunt, quos dicta placeat, voluptatum maxime quaerat
            incidunt ratione inventore aliquam ex ipsa! Eos maiores neque nobis,
            officiis quos adipisci mollitia earum a aperiam, nam tempora culpa
            consectetur quae? Debitis aperiam fugiat tempora sit recusandae
            dolorem accusamus nisi sapiente, enim voluptatum sint quidem eos
            facere quibusdam? Commodi, nulla culpa. Architecto assumenda,
            necessitatibus, explicabo quis, placeat ex eaque mollitia nulla
            eveniet officia magnam praesentium reprehenderit minima! Blanditiis
            magnam ipsam, deserunt esse eum commodi perspiciatis dolorum impedit
            inventore! Perspiciatis laboriosam ea fuga illo dolorem maxime
            officiis a accusantium nemo, expedita fugiat nostrum quae optio
            cumque voluptatum, corporis aperiam iste sit itaque facere. Corrupti
            suscipit ab provident et totam debitis fugiat illo, deleniti culpa
            nesciunt eius, ullam id consequatur? Eos, quasi. Non, hic. Voluptate
            incidunt doloribus quas animi corrupti perspiciatis tempora eligendi
            possimus deserunt voluptatum fugiat maxime rem, placeat blanditiis
            illo nihil. Maiores ducimus maxime exercitationem voluptate
            nesciunt. Necessitatibus nostrum eum eaque nesciunt nobis, sint et
            vitae sequi quae dolor? Natus hic aspernatur, rem suscipit ut
            debitis quis veniam ipsum laborum reiciendis maxime rerum? Iusto,
            dolorum a est, eius excepturi accusamus iste voluptates doloremque
            rerum inventore rem. Distinctio omnis aspernatur aliquid itaque
            tenetur fugit!
          </p>
          <button
            onClick={() => registerEvent(event._id)}
            className=" font-tech rounded-sm shadow-black w-[247px] h-[57px] top-0 mt-4 bg-white text-black py-2 px-6 hover:bg-gray-100 transition duration-300 text-[1.75rem]"
          >
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}
