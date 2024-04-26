"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Veloretti from "@/assests/Veleretti.png";
import { ShoppingCart, UserRound, MenuIcon } from "lucide-react";
import NavLinks from "./Navlinks";

const Header = () => {
  return (
    <main className="max-w-8xl mx-auto lg:px-20 px-5 py-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-center gap-20">
          {/* <Image src={Veloretti} alt="Logo" className="cursor-pointer" /> */}
          <Link href="/" className="tracking-[10px] text-xl lg:flex hidden">
            VELORETTI
          </Link>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[30] p-5 shadow bg-white rounded-box mt-3 w-52 cursor-pointer"
            >
              <NavLinks />
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-3 ">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="lg:flex hidden flex-row gap-5 cursor-pointer">
          <ShoppingCart />
          <UserRound />
        </div>
      </div>
    </main>
  );
};

export default Header;
