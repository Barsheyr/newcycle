import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="flex lg:flex-row flex-col z-20 py-3 gap-5">
      <Link href="/" className="flex lg:hidden">
        Home
      </Link>
      <Link href="/Aboutus"> About </Link>
      <Link href="/cities"> Cities </Link>
      <Link href="/products"> Products </Link>
    </div>
  );
};

export default Navlinks;
