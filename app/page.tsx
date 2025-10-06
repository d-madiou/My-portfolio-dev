"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
// import Marquee from "@/components/Marquee";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import CTA from "@/components/CTA";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 bg-brand-black overflow-x-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(175,255,0,0.1),_transparent_40%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,_rgba(175,255,0,0.1),_transparent_40%)]"></div>

      {/* Header */}
      <Header />
      {/* <section className="flex flex-col items-center justify-center gap-4 py-20">
        <ModeToggle />
      </section> */}

      {/* Portfolio sections */}
      <Hero />
    </main>
  );
}
