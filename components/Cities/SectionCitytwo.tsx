import React from "react";
import Image from "next/image";
import cityone from "@/assests/cityone.png";
import citytwo from "@/assests/citytwo.png";

const SectionCitytwo = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20 relative mb-[30%]">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-20">
        <Image src={cityone} alt="cityone" />
        <Image src={citytwo} alt="citytwo" />
      </div>
      <div className="max-w-xl mx-auto lg:px-20 px-10 absolute lg:-bottom-32 bottom-0 right-[30%]">
        <p className="bg-white lg:p-10 p-5 lg:text-2xl text-md border-5 rounded-md shadow-lg">
          Our women bicycles are for everyone who likes to combine style with
          performance. In this range, available are the Café Racer and the
          Robyn, both frames with a lower tube, making it easy to step through.
        </p>
      </div>
    </div>
  );
};

export default SectionCitytwo;
