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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to-teal-300">
              Hello there, I am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Umar Zaman",
                1000,
                "An Aspiring Cloud Security Engineer",
                1000,
                "A Software Developer",
                1000,
                "A Future Cloud Computing Specialist",
                1000,
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
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 right-1/2 bottom-1/2"
            width={300}
            height={300}
          />
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
        <button className="w-full px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-emerald-500 to-teal-300 sm:w-fit hover:bg-slate-200 text-white">
          Hire me
        </button>
        <button className="w-full px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-emerald-500 to-teal-300 sm:w-fit hover:bg-slate-800 text-white border border-white mt-3">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white">
            Download CV
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
