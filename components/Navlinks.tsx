import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-10 tracking-[3px]">
      <Link href="/Aboutus"> About </Link>
      <Link href="/cities"> Cities </Link>
      <Link href="/products"> Products </Link>
    </div>
  );
};

export default Navlinks;
