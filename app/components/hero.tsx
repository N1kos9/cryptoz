import Image from "next/image";
import item from "@/assets/item.webp";
import { FaInstagram, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  return (
    <main>
      <div className="bg-banner">
        <div className="svg-item "></div>
      </div>
      <div className="text-center text-5xl mt-36 flex flex-col items-center ">
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="font-semibold lg:w-3/5 lg:text-5xl text-3xl p-1"
        >
          The biggest Cryptocurrency platform for you
        </motion.h1>
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }} // Optional: Add exit opacity for smoother exit transition
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1.5,
          }}
          // Adjust stiffness and damping for slower animation
          className="mt-24 "
        >
          <Image src={item} width={250} height={250} alt="item" className="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
          className="hidden lg:absolute lg:flex lg:flex-col lg:left-20 lg:bottom-0 lg:mb-8 lg:text-black"
        >
          <FaInstagram size={20} className="mb-8" />
          <FaLinkedinIn size={20} className="mb-8" />
          <FaRedditAlien size={20} className="mb-8" />
          <CiTwitter size={20} className="mb-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
          className="hidden lg:absolute lg:right-20 lg:bottom-20 lg:flex lg:items-center lg:flex-col"
        >
          <p className="text-black text-sm [writing-mode:vertical-lr] mb-10 tracking-[.45rem] opacity-60 uppercase">
            Scroll Down
          </p>
          <svg
            width="26"
            height="36"
            viewBox="0 0 26 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0002 35.6C16.2676 35.6 19.4013 34.302 21.7117 31.9916C24.0222 29.6811 25.3202 26.5475 25.3202 23.28V12.72C25.3202 9.45253 24.0222 6.31889 21.7117 4.00845C19.4013 1.698 16.2676 0.400002 13.0002 0.400002C9.73271 0.400002 6.59907 1.698 4.28862 4.00845C1.97817 6.31889 0.680176 9.45253 0.680176 12.72V23.28C0.680176 26.5475 1.97817 29.6811 4.28862 31.9916C6.59907 34.302 9.73271 35.6 13.0002 35.6ZM2.44018 12.72C2.44018 9.91931 3.55274 7.23334 5.53313 5.25295C7.51351 3.27257 10.1995 2.16 13.0002 2.16C15.8009 2.16 18.4868 3.27257 20.4672 5.25295C22.4476 7.23334 23.5602 9.91931 23.5602 12.72V23.28C23.5602 26.0807 22.4476 28.7667 20.4672 30.747C18.4868 32.7274 15.8009 33.84 13.0002 33.84C10.1995 33.84 7.51351 32.7274 5.53313 30.747C3.55274 28.7667 2.44018 26.0807 2.44018 23.28V12.72Z"
              fill="#081A39"
            />
            <path
              d="M12.12 27.8801H12.1992L12.3752 28.0649C12.457 28.1474 12.5544 28.2128 12.6616 28.2575C12.7688 28.3022 12.8838 28.3252 13 28.3252C13.1162 28.3252 13.2312 28.3022 13.3384 28.2575C13.4457 28.2128 13.543 28.1474 13.6248 28.0649L13.8008 27.8801H13.88V27.8009L18.9048 22.7849L17.6552 21.5353L13.88 25.3193V16.0001H12.12V25.3193L8.34481 21.5353L7.09521 22.7849L12.12 27.8009V27.8801Z"
              fill="#081A39"
            />
          </svg>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
