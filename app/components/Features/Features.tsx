import React from "react";
import Image from "next/image";
import Img1 from "@/public/images/f1.jpg";
import Img2 from "@/public/images/f2.jpg";
import Img3 from "@/public/images/f3.jpg";

const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* Head */}
      <h1 className="heading">
        burgers made with <br /> love and
        <span className="text-red-600"> Care</span>
      </h1>
      {/* Cards */}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* First Card 1 */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img1} alt="Burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsa
              blanditiis quos provident delectus, optio consequuntur maxime.
              Quod, dignissimos eveniet.
            </p>
          </div>
        </div>
        {/* Second Card 2 */}
        <div>
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={Img2} alt="Burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsa
              blanditiis quos provident delectus, optio consequuntur maxime.
              Quod, dignissimos eveniet.
            </p>
          </div>
        </div>
        {/* Third Card 3 */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={Img3} alt="Burger" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chicken Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsa
              blanditiis quos provident delectus, optio consequuntur maxime.
              Quod, dignissimos eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
