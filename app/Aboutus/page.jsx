import React from "react";
import Hero from "@/components/About/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSwiper from "@/components/About/AboutSwiper";

const AboutUsPage = () => {
  return (
    <div className="">
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSwiper />
    </div>
  );
};

export default AboutUsPage;
