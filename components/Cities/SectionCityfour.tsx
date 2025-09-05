import React from "react";
import Image from "next/image";
import Cityfive from "@/assests/cityfive.png";
import Citysix from "@/assests/citysix.png";
import Cityseven from "@/assests/cityseven.png";

const SectionCityfour = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative">
      {/* Use 3 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Left image */}
        <div>
          <Image
            src={Cityfive}
            alt="city five"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Middle text card */}
        <div>
          <p className="bg-white shadow-lg text-gray-700 border border-slate-200 rounded-xl p-6 lg:p-8 text-base lg:text-lg leading-relaxed">
            Whether you like it easy or fast, we got both. Our men’s range of
            bicycles combine modern clean design with great quality, so they’re
            perfect for your daily city commute. Our men citybikes are the
            Caféracer, Caféchaser and the Berlin, but feel free to opt for a
            women’s bike for that easy hop-on-hop-off Amsterdam style.
          </p>
        </div>

        {/* Right image */}
        <div>
          <Image
            src={Citysix}
            alt="city six"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCityfour;
