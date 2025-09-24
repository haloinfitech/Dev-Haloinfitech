"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          <Services />
          <WhyChooseUs />
          <Portfolio />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}
