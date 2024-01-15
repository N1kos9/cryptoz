import React from "react";
import Image from "next/image";
import item from "@/assets/item3.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <main className="grid lg:grid-cols-2 grid-cols-1 mt-44 mx-auto w-full items-center lg:text-left text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeInOut", delay: 1.0 }}
        viewport={{ once: true }}
        className=" justify-center lg:w-[100%] w-[30%] lg:flex hidden"
      >
        <Image
          src={item}
          width={400}
          height={400}
          alt="item3"
          className="items-center justify-center"
        />
      </motion.div>
      <div className="text-black">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 1.0 }}
          viewport={{ once: true }}
          className="text-purple underline mb-4 font-semibold uppercase"
        >
          About CrypToz
        </motion.p>
        <motion.h1
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-balance"
        >
          Our theme relies on success and trust
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 1.0 }}
        >
          <p className=" opacity-50 text-balance mt-5">
            The World’s 1st Platform That Offers Rewards and The platform helps
            investors to make easy
          </p>
          <p className="mt-5">Mouthwatering leading how real formula also</p>
          <p className="mt-3">Locked-in have can mountain thought</p>
          <button className="bg-purple text-white hover:bg-blue p-4 rounded duration-300 font-semibold mt-10">
            Download Document
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
