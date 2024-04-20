import React from "react";
import Image from "next/image";
import HeroSection from "@/assests/HeroSection.png";

const Hero = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 px-5">
        <p className="lg:text-xl text-xl tracking-widest leading-tight">
          Veloretti Business
        </p>
        <h1 className="lg:text-8xl text-4xl tracking-wide leading-tight">
          Bike Lease Plan For Employees.
        </h1>
      </div>

      <div className="absolute top-0 w-full h-full">
        <Image
          src={HeroSection}
          alt="AboutHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
