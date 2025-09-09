"use client";

import React from "react";
import {
  FaGlobeAmericas,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Hero() {
  const icons = [
    {
      Icon: FaTwitter,
      color: "#1DA1F2",
      pos: "top-72 left-6 sm:left-20",
      dur: 1,
    },
    {
      Icon: FaLinkedin,
      color: "#0A66C2",
      pos: "top-60 right-6 sm:right-20",
      dur: 2,
    },
    {
      Icon: FaFacebook,
      color: "#1877F2",
      pos: "bottom-40 left-6 sm:left-24",
      dur: 1,
    },
    {
      Icon: RiNetflixFill,
      color: "#E50914",
      pos: "bottom-28 right-6 sm:right-24",
      dur: 2,
    },
    {
      Icon: FcGoogle,
      color: "#DB4437",
      pos: "top-40 left-1/2 -translate-x-1/2",
      dur: 4,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center" id="home">
      <div className="relative w-10/12 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero content */}
        <div className="w-full  flex items-center justify-center flex-col text-center">
          {/* Badge */}
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-400 font-semibold text-xs sm:text-sm md:text-base rounded-full whitespace-nowrap"
          >
            <FaGlobeAmericas className="text-base sm:text-lg" /> No. 1 tech
            tutoring platform
          </motion.p>

          {/* Headings */}
          <div className="flex flex-col items-center justify-center mt-6">
            <motion.h1
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap"
            >
              Teach, Learn, Grow
            </motion.h1>

            <motion.h1
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-4"
            >
              Get Your <span className="text-[#6435cc]">Dream Job</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 text-center px-4"
          >
            Our platform connects expert tutors with learners worldwide. Tutors
            can create and sell courses, while students can learn new skills,
            grow their careers, and prepare for their dream jobs — all in one
            place.
          </motion.p>
        </div>

        {/* Floating icons */}
        {icons.map(({ Icon, color, pos, dur }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${pos} w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-violet-400 shadow-md bg-white text-xl`}
            style={{ color }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
