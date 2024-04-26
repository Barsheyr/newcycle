"use client";
import Image from "next/image";
import citybike from "@/assests/cityBike.png";
import kidsbike from "@/assests/kidsBike.png";
import electricbike from "@/assests/electricBike.png";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const AboutSwiper = () => {
  return (
    <main className="max-w-8xl mx-auto lg:px-20 px-5 py-20">
      <div>
        <h1 className="text-4xl tracking-tight sm:text-6xl">
          Expore your bikes
        </h1>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 50 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        // slidesPerView={5}
        // spaceBetween={10}
        pagination={true}
        modules={[Pagination]}
        className="mt-20"
      >
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl">Electric Bikes </h1>
              <p className="text-sm text-gray-400"> From $3,299 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-sm">Electric Ivy Two </h1>
              <h1 className="text-sm">Electric Ace Two </h1>
            </div>
            <Image src={kidsbike} alt="kidsbike" className="rounded-md" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl">City Bikes </h1>
              <p className="text-sm text-gray-400"> From $399 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-sm">Women </h1>
              <h1 className="text-sm">Men </h1>
            </div>
            <Image src={citybike} alt="kidsbike" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Kids Bikes </h1>
              <p className="text-sm text-gray-400"> From $400 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-sm"> Ages 1,5 to 8 </h1>
            </div>
            <Image src={electricbike} alt="kidsbike" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Electric Bikes </h1>
              <p className="text-sm text-gray-400"> From $400 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1>Electric Ivy Two </h1>
              <h1>Electric Ace Two </h1>
            </div>
            <Image src={kidsbike} alt="kidsbike" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Electric Bikes </h1>
              <p className="text-sm text-gray-400"> From $400 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1>Electric Ivy Two </h1>
              <h1>Electric Ace Two </h1>
            </div>
            <Image src={citybike} alt="kidsbike" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="flex flex-col gap-7 px-10 py-10 group transition bg-slate-100 rounded-md shadow-md">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-xl">Electric Bikes </h1>
              <p className="text-sm text-gray-400"> From $400 </p>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h1>Electric Ivy Two </h1>
              <h1>Electric Ace Two </h1>
            </div>
            <Image src={electricbike} alt="kidsbike" />

            <div className="flex flex-row items-center justify-between">
              <button className="btn text-black hover:text-white bg-white">
                Buy now
              </button>
              <p> Learn More </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default AboutSwiper;
