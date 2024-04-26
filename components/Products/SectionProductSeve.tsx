import React from "react";
import Image from "next/image";
import ProductSeven from "@/assests/ProductSeven.png";

const SectionProductSeve = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-10 lg:px-20 lg:pr-[40%] px-5">
        <h1 className="lg:text-6xl text-4xl tracking-wide leading-tight">
          Red Dot Award
        </h1>
        <p className="lg:text-xl font-thin text-xl lg:pr-[40%]">
          Good design is what drives us, and we are proud to share that
          Veloretti Electric Two has already won the prestigious Red Dot Design
          Award 2023, as judged by the worlds best product designers.
        </p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <Image
          src={ProductSeven}
          alt="ProductHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default SectionProductSeve;
