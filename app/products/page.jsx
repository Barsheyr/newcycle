import Hero from "@/components/Products/Hero";
import SectionProductone from "@/components/Products/SectionProductone";
import SectionProducttwo from "@/components/Products/SectionProducttwo";
import SectionProductthree from "@/components/Products/SectionProductthree";
import SectionProductfour from "@/components/Products/SectionProductFour";
import SectionProductfive from "@/components/Products/SectionProductFive";
import SectionProductsix from "@/components/Products/SectionProductSix";
import SectionProductseven from "@/components/Products/SectionProductSeve";
import SectionProducteight from "@/components/Products/SectionProductEight";

import React from "react";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <SectionProductone />
      <SectionProducttwo />
      <SectionProductthree />
      <SectionProductfour />
      <SectionProductfive />
      <SectionProductsix />
      <SectionProductseven />
      <SectionProducteight />
    </div>
  );
};

export default ProductPage;
