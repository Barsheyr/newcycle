import React from "react";
import Image from "next/image";
import SectionThree from "@/assests/section3.png";

const Section3 = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <Image src={SectionThree} alt="Section1" className="w-full" />

        <div className="flex flex-col gap-10 md:px-20 lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">
            Free of charge for employees.
          </h1>
          <p className="font-thin">
            Veloretti Electrics benefit both the environment and the health of
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>

          <div>Cost Example</div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
