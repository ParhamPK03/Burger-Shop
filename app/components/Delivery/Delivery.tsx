import Image from "next/image";
import React from "react";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 items-center lg:grid-cols-2 gap-[3rem]">
        {/* Image */}
        <div>
          <Image src={DeliveryImg} alt="delivery" />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            Your <span className="text-red-600">Favorite Burger</span> On the
            Way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            adipisci, quos reprehenderit rem quo nemo nesciunt tempora unde
            eveniet. Veniam, delectus unde cupiditate quidem tempora impedit
            laudantium! Maxime, porro doloribus.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="text-red-600 w-[2rem] h-[2rem]" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="text-red-600 w-[2rem] h-[2rem]" />
            <h1 className="text-[18px] text-black font-medium">
               Free shipping from 75$
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="text-red-600 w-[2rem] h-[2rem]" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
