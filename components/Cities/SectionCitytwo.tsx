import React from "react";
import Image from "next/image";
import cityone from "@/assests/cityone.png";
import citytwo from "@/assests/citytwo.png";

const SectionCitytwo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      {/* Image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <Image
          src={cityone}
          alt="city one"
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
        <Image
          src={citytwo}
          alt="city two"
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Text block */}
      <div className="mt-10 lg:mt-16 max-w-2xl mx-auto">
        <p className="bg-white text-gray-700 lg:text-xl text-base leading-relaxed p-6 lg:p-10 rounded-xl shadow-lg border border-gray-100">
          Our women bicycles are for everyone who likes to combine style with
          performance. In this range, available are the Café Racer and the
          Robyn, both frames with a lower tube, making it easy to step through.
        </p>
      </div>
    </section>
  );
};

export default SectionCitytwo;
