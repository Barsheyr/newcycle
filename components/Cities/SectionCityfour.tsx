import React from "react";
import Image from "next/image";
import Cityfive from "@/assests/cityfive.png";
import Citysix from "@/assests/citysix.png";
import Cityseven from "@/assests/cityseven.png";

const SectionCityfour = () => {
  return (
    <div className="max-w-8xl mx-auto px-20 py-20 relative">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <Image src={Cityfive} alt="cityfive" className="col-span-6" />
        <p className="shadow-md lg:text-2xl text-lg border-2 border-slate-300 text-slate-400 rounded-md col-span-3">
          Whether you like it easy or fast, we got both. Our mens range of
          bicycles combine modern clean design with great quality, so they are
          perfect for your daily city commute. Our men citybikes are the
          Caféracer, Caféchaser and the Berlin, but feel free to opt for a
          womens bike for that easy hop-on- hop-off Amsterdam style.
        </p>
        <Image src={Citysix} alt="citysix" className="col-span-3" />
      </div>
      {/* <Image
        src={Cityseven}
        alt="cityseven"
        className="absolute -bottom-[50%] left-[30%] w-[20%]"
      /> */}
    </div>
  );
};

export default SectionCityfour;
