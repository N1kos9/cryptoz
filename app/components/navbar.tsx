import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="w-full h-[90px] top-0 left-0 z-10 overflow-y-hidden overflow-x-hidden overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
          className="flex justify-between items-center h-full p-[1rem] font-semibold overflow-y-hidden overflow-x-hidden  shadow-xl"
        >
          <h1 className="text-3xl">
            Crypt<span>Toz</span>
          </h1>
          <ul
            className={
              click
                ? "z-50 duration-30 flex lg:flex-row lg:relative overflow-hidden justify-start top-[90px] lg:top-0 right-0 bg-white text-black lg:right-auto w-3/6 lg:w-auto h-[100vh] lg:h-auto duration-300  absolute flex-col lg:border-0 border-l border-bordering"
                : "z-50 duration-30 flex lg:flex-row lg:relative overflow-hidden justify-start top-[90px] lg:top-0 -right-full   lg:right-auto w-3/6 lg:w-auto h-[100vh] lg:h-auto duration-300  absolute flex-col lg:border-0  border-l border-bordering"
            }
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Prices</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div>
            <button className="bg-blue p-3 rounded hover:bg-purple duration-300 font-semibold">
              Connect Wallet
            </button>
          </div>
          <div className="cursor-pointer lg:hidden" onClick={handleClick}>
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
