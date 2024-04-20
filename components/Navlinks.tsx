import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="flex flex-row items-center gap-10 tracking-[3px]">
      <Link href="/Aboutus"> About </Link>
      <Link href="/cities"> Cities </Link>
      <Link href="/products"> Products </Link>
    </div>
  );
};

export default Navlinks;
