"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { ImMail4 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";

export default function Foot() {
  const socialLinks = [
    { icon: VscGithub, href: "https://github.com", color: "hover:text-black" },
    { icon: TbBrandLinkedinFilled, href: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: ImMail4, href: "mailto:hello@techtutor.com", color: "hover:text-red-500" },
    { icon: FaFacebook, href: "https://facebook.com", color: "hover:text-blue-500" },
  ];

  return (
    <footer className="flex w-full justify-center items-center border-t-2">
      <div className="w-11/12 lg:10/12 items-center justify-center flex flex-col py-10">
        {/* Logo */}
        <div className="text-4xl gap-1 w-full flex font-bold cursor-pointer items-center justify-center pb-6">
          <motion.h1
            className="text-[#6435cc]"
            whileHover={{ scale: 1.1, rotate: -3 }}
          >
            tech
          </motion.h1>
          <motion.h1
            className="text-[#f15a22]"
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            tutor
          </motion.h1>
        </div>

        {/* Footer Links */}
        <ul className="w-full flex flex-wrap justify-center gap-8 text-center text-sm text-gray-600 pb-6">
          {["Terms of Service", "Privacy Policy", "Security", "Cookie Policy"].map(
            (item, idx) => (
              <li key={idx}>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="transition hover:text-[#6435cc]"
                >
                  {item}
                </motion.a>
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <ul className="w-full flex justify-center gap-6 text-2xl text-gray-500 pb-6">
          {socialLinks.map(({ icon: Icon, href, color }, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer transition"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className={`${color} transition`} />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Copyright */}
        <div>
          <p className="text-xs text-gray-500">
            © 2025 Tech Tutor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
