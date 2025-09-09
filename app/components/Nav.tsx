"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#tutor", label: "For Tutors" },
    { href: "#student", label: "For Students" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-lg border-b fixed top-0 left-0 z-50">
      <nav className="mx-auto w-10/12">
        <div className="flex h-auto py-6 items-center justify-between">
          {/* Logo */}
          <div className="text-3xl gap-1 flex font-bold cursor-pointer">
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="font-semibold text-lg text-pretty text-[#6435cc] px-3 py-1 rounded-md transition-colors duration-300 "
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-xl text-[#6435cc]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col space-y-4 py-6 font-medium">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 rounded-sm transition-colors duration-300 "
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
