"use client";
import React from "react";
import Image from "next/image";
import citythree from "@/assests/citythree.png";
import cityfour from "@/assests/cityfour.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SectionCitiesthree = () => {
  return (
    <div className="bg-[#B6B6B6]">
      <div className="max-w-7xl mx-auto px-20 py-20">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 50 },
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
          }}
          // slidesPerView={5}
          // spaceBetween={10}
          pagination={true}
          modules={[Pagination]}
          className=""
        >
          <SwiperSlide className="">
            <Image src={citythree} alt="citybike" className="rounded-md" />
            <div className="flex flex-row items-center justify-between text-white mt-10">
              <p className="text-xl"> Carefacer</p>
              <p className="text-xl font-light"> Women </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={cityfour} alt="citybike" className="rounded-md" />
            <div className="flex flex-row items-center justify-between text-white mt-10">
              <p className="text-xl"> Carefacer</p>
              <p className="text-xl font-light"> Women </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <Image src={citythree} alt="citybike" className="rounded-md" />
            <div className="flex flex-row items-center justify-between text-white mt-10">
              <p className="text-xl"> Carefacer</p>
              <p className="text-xl font-light"> Women </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionCitiesthree;
