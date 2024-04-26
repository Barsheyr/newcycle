import React from "react";
import Image from "next/image";
import ProductEight from "@/assests/ProductEight.png";

const SectionProductEight = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-10">
        <div className="flex flex-col gap-10 md:px-20 lg:px-0">
          <h1 className="text-4xl tracking-tight sm:text-6xl">Ride Carefree</h1>
          <p className="font-light">
            Our Qover x Veloretti insurance plan has got you covered. It offers
            comprehensive coverage against theft, provides assistance in case of
            any issues, and covers any damages to your bike.
          </p>

          <div>Learn More </div>
        </div>
        <Image src={ProductEight} alt="Section1" className="w-full" />
      </div>
    </section>
  );
};

export default SectionProductEight;
