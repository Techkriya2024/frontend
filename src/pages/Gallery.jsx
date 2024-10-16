import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import Carousal from "../components/Carousel";
import image1 from "../assets/images/c-1.jpeg";
import image2 from "../assets/images/c-2.jpeg";
import image3 from "../assets/images/c-3.jpeg";
import image4 from "../assets/images/c-4.jpeg";
import image5 from "../assets/images/c-5.jpeg";
import image6 from "../assets/images/c-6.jpeg";
import image7 from "../assets/images/c-7.jpeg";
import image8 from "../assets/images/c-8.jpeg";
import image9 from "../assets/images/c-9.jpeg";
import image10 from "../assets/images/c-10.jpeg";
import image11 from "../assets/images/c-11.jpeg";
import image12 from "../assets/images/c-12.jpeg";
import image13 from "../assets/images/c-13.jpeg";
import image14 from "../assets/images/c-14.jpeg";
import image15 from "../assets/images/c-15.jpeg";
import image16 from "../assets/images/c-16.jpeg";

export default function Gallery() {
  const items1 = [
    { id: 1, title: "First Element", image: image1 },
    { id: 2, title: "Second Element", image: image2 },
    { id: 3, title: "Third Element", image: image3 },
    { id: 4, title: "Fourth Element", image: image4 },
  ];
  const items2 = [
    { id: 1, title: "First Element", image: image5 },
    { id: 2, title: "Second Element", image: image6 },
    { id: 3, title: "Third Element", image: image7 },
    { id: 4, title: "Fourth Element", image: image8 },
  ];
  const items3 = [
    { id: 1, title: "First Element", image: image9 },
    { id: 2, title: "Second Element", image: image10 },
    { id: 3, title: "Third Element", image: image11 },
    { id: 4, title: "Fourth Element", image: image12 },
  ];
  const items4 = [
    { id: 1, title: "First Element", image: image13 },
    { id: 2, title: "Second Element", image: image14 },
    { id: 3, title: "Third Element", image: image15 },
    { id: 4, title: "Fourth Element", image: image16 },
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-[#131313] h-max min-h-screen w-full">
      <div className="flex shadow shadow-black justify-start gap-5 items-center h-[5rem] p-3">
        <button onClick={() => navigate(-1)}>
          <IoChevronBackOutline
            size={40}
            className="border-2 text-black-600 border-black-600  rounded-md p-1"
          />
        </button>
        <p className="text-white font-kindle text-[1.6rem] tracking-wider">
          Gallery
        </p>
      </div>
      <div className="grid sm:grid-cols-2">
        <Carousal items={items1} />
        <Carousal items={items2} />
        <Carousal items={items3} />
        <Carousal items={items4} />
      </div>
    </div>
  );
}
