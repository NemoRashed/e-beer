import React from "react";
import Hero from "@/components/Hero";
import Products from "@/components/products";
import Testimonal from "@/components/testimonal";
import About from "@/components/about";
import Contact from "@/components/contact";

function page() {
  return (
    <div className="">
      <Hero />
      <Products />
      <About />
      <Testimonal />
      <Contact />
    </div>
  );
}

export default page;
