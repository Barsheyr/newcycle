import React from "react";
import Image from "next/image";

import R from "@/assests/R.png";

const SectionProductthree = () => {
  return (
    <div className="max-w-8xl mx-auto px-20 py-20">
      <h1 className="text-6xl">
        Make your commute <br /> the best part of your day.
      </h1>

      <div className="flex flex-row items-center justify-between mt-20">
        <p>
          Clean and timeless designs that make every ride a thrill.
          <br /> Wherever you are heading, our bikes are made to make your daily
          <br />
          commute a joy.
        </p>
        <Image src={R} alt="R" />
      </div>
    </div>
  );
};

export default SectionProductthree;
