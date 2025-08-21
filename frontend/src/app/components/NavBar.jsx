"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Endorsements",
    href: "#endorsements",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  const [navbarisOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-purple-900/60 via-[#181022]/60 to-rose-900/60 backdrop-blur-lg shadow-lg">
      <div className="flex flex-wrap items-center justify-end mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarisOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-full border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500/20 shadow-md"
            >
              <Bars3Icon className="h-6 w-6 text-white drop-shadow" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-full border-pink-500 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500/20 shadow-md"
            >
              <XMarkIcon className="h-6 w-6 text-white drop-shadow" />
            </button>
          )}
          {navbarisOpen && (
            <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-purple-900/90 via-[#181022]/90 to-rose-900/90 backdrop-blur-xl shadow-xl py-6 z-30 flex flex-col items-center space-y-4 animate-fade-in md:hidden">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href} title={link.title} />
              ))}
            </div>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-10 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
