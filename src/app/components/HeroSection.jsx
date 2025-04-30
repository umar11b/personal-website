"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <section>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
              Hello there, I am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Umar Zaman",
                2000,
                "an aspiring Cloud & DevOps Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* <div>
            <button className="w-full px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-emerald-500 to-teal-300 sm:w-fit hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="w-full px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-emerald-500 to-teal-300 sm:w-fit hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
                Download CV
              </span>
            </button>
          </div> */}
        </section>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="flex items-center justify-center">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
            <Image
              src="/images/hero-image.png"
              alt="Profile Picture"
              className="rounded-full object-cover bg-[#181818]"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>
      </div>
      {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        I am an aspiring Cloud Security Engineer. Aliquam congue sem eget luctus
        consequat. In lectus mauris, rhoncus eu metus in, pellentesque tristique
        metus. Etiam tincidunt tempus metus, et lacinia dolor mattis eget. Donec
        sodales accumsan ipsum sit amet sollicitudin. Sed ornare eu est vitae
        sodales. Nullam accumsan lectus sit amet massa venenatis bibendum.
        Vivamus viverra in massa ut tempus. Integer sed egestas est. Phasellus
        metus justo, convallis eget scelerisque id, elementum ac nunc. Sed
        rhoncus augue eu tortor iaculis consectetur.
      </p> */}
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <button className="w-full px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 sm:w-fit hover:bg-slate-200 text-white">
          Hire me
        </button>
        <button className="w-full px-1 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 sm:w-fit hover:bg-slate-800 text-white border border-white mt-3">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
            Download CV
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
