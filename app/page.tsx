"use client";

import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Foot from "./components/Foot";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div className="w-full flex-col flex items-center justify-center h-auto">
      <Nav />
      <Hero />
      <Service />
      <AboutUs />
      <Foot />
    </div>
  );
}
