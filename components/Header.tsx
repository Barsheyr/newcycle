"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Veloretti from "@/assests/Veleretti.png";
import { ShoppingCart, UserRound } from "lucide-react";
import NavLinks from "./Navlinks";

const Header = () => {
  return (
    <main className="max-w-8xl mx-auto lg:px-20 px-5 py-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-20">
          {/* <Image src={Veloretti} alt="Logo" className="cursor-pointer" /> */}
          <Link href="/" className="tracking-[10px] text-xl">
            VELORETTI
          </Link>
          <div className="hidden lg:flex flex-col">
            <NavLinks />
          </div>
        </div>

        <div className="flex flex-row gap-5 cursor-pointer">
          <ShoppingCart />
          <UserRound />
        </div>
      </div>
    </main>
  );
};

export default Header;
