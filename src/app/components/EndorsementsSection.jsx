"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Add your endorsement images to public/endorsements/
const endorsements = [
  {
    src: "/images/endorsements/endorsement1.png",
    alt: "Endorsement 1",
  },
  {
    src: "/images/endorsements/endorsement2.png",
    alt: "Endorsement 2",
  },
  {
    src: "/images/endorsements/endorsement3.png",
    alt: "Endorsement 3",
  },
  {
    src: "/images/endorsements/endorsement4.png",
    alt: "Endorsement 4",
  },
  {
    src: "/images/endorsements/endorsement5.png",
    alt: "Endorsement 5",
  },
  {
    src: "/images/endorsements/endorsement6.png",
    alt: "Endorsement 6",
  },
  // Add more as needed
];

const EndorsementsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % endorsements.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section id="endorsements" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Endorsements
        </h2>
        <div className="relative flex items-center justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mx-auto w-full max-w-6xl p-3 bg-[#181818] rounded-3xl"
            >
              <Image
                src={endorsements[current].src}
                alt={endorsements[current].alt}
                width={1000}
                height={750}
                className="rounded-2xl object-contain mx-auto bg-[#232323]"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-3 mt-2">
          {endorsements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500/50 ${
                idx === current
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 border-transparent shadow-lg"
                  : "bg-[#232323] border-[#444]"
              }`}
              aria-label={`Go to endorsement ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndorsementsSection;
