import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutHero from "@/assests/AboutHero.png";

const Hero = () => {
  return (
    <main className="h-[100vh] relative flex">
      <div className="text-white mt-10 z-20 flex flex-col item-center justify-center space-y-5 lg:px-20 px-5">
        <p className="lg:text-xl text-xl tracking-widest leading-tight">
          VELERETTI ELECTRIC
        </p>
        <h1 className="lg:text-8xl text-4xl tracking-wide leading-tight">
          This Is Two.
        </h1>
        <p className="lg:text-xl text-xl">
          Introducing The All-New Ivy And Ace.
        </p>
      </div>

      <div className="absolute top-0 w-full h-full">
        <Image
          src={AboutHero}
          alt="AboutHero"
          className="object-cover h-[100vh] w-full"
        />
      </div>
    </main>
  );
};

export default Hero;
