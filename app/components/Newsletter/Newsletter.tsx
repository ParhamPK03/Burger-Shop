import React from "react";

const Newsletter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
          join for hot offers
        </h1>
        <p className="text-black opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          corrupti veniam ipsum, iure deleniti dolore itaque maxime molestiae
          architecto accusantium est nesciunt dolorem cum nam atque consequuntur
          laborum hic doloremque.
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* input */}
          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-4 bg-gray-300 w-[40%] outline-none rounded-lg placeholder:text-black"
          />
          {/* Subscribe button */}
          <button className="px-8 py-4 bg-green-600 hover:bg-green-800 transition-all duration-200 rounded-md  text-white font-bold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
