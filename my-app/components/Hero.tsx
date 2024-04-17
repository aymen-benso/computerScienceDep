"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import StudentSpace from "./StudentSpace";

export default function Hero() {
  const images = [
    "WhatsApp1.jpeg",
    "WhatsApp2.jpeg",
    "WhatsApp3.jpeg",
    "WhatsApp4.jpeg",
    "WhatsApp5.jpeg",
  ];
  return (
    <ImagesSlider className="h-[25rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center h-full text-white"
      >
        <motion.p className="font-bold text-xl md:text-5xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
          Welcome to <br /> Tlemcen University
        </motion.p>
        <StudentSpace btname="Student Space" fixed="fixed" />
      </motion.div>
    </ImagesSlider>
  );
}
