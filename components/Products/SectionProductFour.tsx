import React from "react";
import Image from "next/image";
import ProductFour from "@/assests/ProductFour.png";

const SectionProductFour = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-10 lg:px-20 lg:pr-[40%] px-5">
        <h1 className="lg:text-6xl text-4xl tracking-wide leading-tight">
          Discover your <br /> local Veloretti <br /> partner store.
        </h1>
        <p className="lg:text-xl font-thin text-xl lg:pr-[40%]">
          Our partner stores across the Netherlands are there for you. Whether
          you are looking to pick up a newly ordered bike, need a fix, or want
          to take a test ride on our Ivy or Ace Two, your ideal biking
          experience is closer than you think. Find a partner store near you
        </p>
        <div className="btn btn-lg rounded-full w-[50%] bg-white text-black hover:text-white border-none">
          Find a partner store near you.
        </div>
      </div>

      <div className="absolute top-0 w-full h-full">
        <Image
          src={ProductFour}
          alt="ProductHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default SectionProductFour;
