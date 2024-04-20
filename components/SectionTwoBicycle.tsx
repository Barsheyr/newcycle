import React from "react";
import Image from "next/image";
import Bikerapper from "@/assests/BikeWrapper.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionTwoBicycle = () => {
  return (
    <section className="max-w-8xl mx-auto lg:px-20 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* frist */}
        <div className="bg-slate-100 lg:px-10 px-10 py-10">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-3xl"> Electric Ace </h1>
            <p> $560 /MONTH </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <ChevronLeft size={50} />
            <Image src={Bikerapper} alt="Bikewrapper" className="w-[80%]" />
            <ChevronRight size={50} />
          </div>
        </div>
        {/* second */}
        <div className="bg-slate-100 px-10 py-10">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-3xl"> Electric Ivy </h1>
            <p> $295 /MONTH </p>
          </div>
          <div className=" flex flex-row items-center justify-between">
            <ChevronLeft size={50} />
            <Image src={Bikerapper} alt="Bikewrapper" className="w-[80%]" />
            <ChevronRight size={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoBicycle;
