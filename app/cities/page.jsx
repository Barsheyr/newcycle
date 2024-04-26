import React from "react";
import Hero from "@/components/Cities/Home";
import SectionCityone from "@/components/Cities/SectionCityone";
import SectionCitytwo from "@/components/Cities/SectionCitytwo";
import SectionCitythree from "@/components/Cities/SectionCitiesthree";
import SectionCityfour from "@/components/Cities/SectionCityfour";
import SectionCityfive from "@/components/Cities/SectionCitiesfive";

const CitiesPage = () => {
  return (
    <div>
      <Hero />
      <SectionCityone />
      <SectionCitytwo />
      <SectionCitythree />
      <SectionCityfour />
      <SectionCityfive />
    </div>
  );
};

export default CitiesPage;
