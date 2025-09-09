"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex w-full items-center justify-center bg-white py-20" id="about">
      <div className="w-11/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
        {/* Right Content - Image (shows first on mobile) */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="w-full rounded-2xl flex items-center justify-center">
            <Image src={"/about.svg"} width={500} height={500} alt="about" />
          </div>
        </div>

        <div className="space-y-6 order-2 lg:order-1">
          <p className="text-sm uppercase  font-bold text-[#6435cc]">
            How it started
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Our Dream is <span className="text-[#f15a22]">Global Learning</span>{" "}
            Transformation
          </h1>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Education has always been the most powerful tool for change. Yet,
              millions across the world still lack access to quality learning
              opportunities. We set out with a simple but ambitious vision — to
              bridge that gap and transform the way the world learns.
            </p>

            <p>
              Our journey began with a belief that learning should be engaging,
              affordable, and accessible to anyone, anywhere. We started small,
              but our commitment has grown into a movement that empowers
              students, professionals, and educators alike.
            </p>

            <p>
              Today, we are building a global platform that blends innovation,
              technology, and human connection — making knowledge not just
              available but truly impactful. This is more than education; it’s
              about creating opportunities, changing lives, and shaping a better
              future together.
            </p>
          </div>
          <a href="#services" className="px-6 py-3 rounded-sm bg-[#f15a22] text-white font-semibold shadow-md hover:cursor-pointer transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
