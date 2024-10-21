"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1324,
    },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600"> Burgers</span>
      </h1>
      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={40000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass='"item'
          showDots={false}
        >
          <BurgerCard
            title="Beefy Bite"
            image="/images/b1.png"
            reviews="31"
            price="24.99$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b2.png"
            reviews="41"
            price="36.14$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b3.png"
            reviews="93"
            price="26.16$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b4.png"
            reviews="62"
            price="13.88$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b5.png"
            reviews="32"
            price="19.88$"
          />
          <BurgerCard
            title="Beefy Bite"
            image="/images/b6.png"
            reviews="10"
            price="21.08$"
          />
           <BurgerCard
            title="Beefy Bite"
            image="/images/b7.png"
            reviews="72"
            price="12.88$"
          />
           <BurgerCard
            title="Beefy Bite"
            image="/images/b8.png"
            reviews="51"
            price="15.16$"
          />
           <BurgerCard
            title="Beefy Bite"
            image="/images/b9.png"
            reviews="17"
            price="16.50$"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
