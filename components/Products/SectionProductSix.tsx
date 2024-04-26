import React from "react";
import Image from "next/image";
import bright from "@/assests/bright.png";
import vogue from "@/assests/vogue.png";
import verge from "@/assests/verge.png";

const SectionProductSix = () => {
  return (
    <div className="max-w-8xl mx-auto px-20 py-20">
      <h1 className="text-4xl tracking-tight sm:text-6xl">
        They talk about us.
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-32">
        <div className="border rounded-md px-10 py-10">
          <p>
            One of the best e-bikes available at any price and far and away my
            favourite ride of the year.
          </p>

          <Image src={verge} alt="verge" />
        </div>
        <div className="border rounded-md px-10 py-10">
          <p>
            One of the best e-bikes available at any price and far and away my
            favourite ride of the year.
          </p>

          <Image src={bright} alt="verge" />
        </div>
        <div className="border rounded-md px-10 py-10">
          <p>
            One of the best e-bikes available at any price and far and away my
            favourite ride of the year.
          </p>

          <Image src={vogue} alt="verge" />
        </div>
      </div>
    </div>
  );
};

export default SectionProductSix;
