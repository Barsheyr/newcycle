import Image from "next/image";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import SectionTwoBicycle from "@/components/SectionTwoBicycle";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionTwoBicycle />
      <Contact />
      <Faq />
    </main>
  );
}
