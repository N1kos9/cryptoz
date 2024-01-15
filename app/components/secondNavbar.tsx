import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
        className="fixed w-full h-screen top-0 left-0 z-10 overflow-hidden flex justify-center "
      >
        <div className=" justify-around w-full flex text-center items-center h-[90px]  font-semibold  bg-black/30 z-10 backdrop-filter backdrop-blur-5xl shadow-lg">
          <h1 className="text-3xl ml-5 text-left ">
            Crypt<span>Toz</span>
          </h1>

          <div
            className="cursor-pointer lg:hidden pl-5 absolute right-10"
            onClick={handleClick}
          >
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
          <ul
            className={`${
              click
                ? "lg:relative lg:top-0 top-20 right-0 w-full h-screen z-20 bg-black/[0.5]"
                : "lg:relative lg:top-0 -right-full lg:right-auto z-10 "
            } overflow-hidden lg:flex lg:flex-row lg:bg-transparent lg:w-auto lg:h-auto duration-300 absolute flex-col lg:border-0 border-l border-bordering`}
          >
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/" onClick={closeMenu}>
                Prices
              </a>
            </li>
            <li>
              <a href="/" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-blue mr-12  p-3 rounded hover:bg-purple duration-300 font-semibold">
            Connect Wallet
          </button>
        </div>

        <div className="">
          {/* Display Connect Wallet button on larger screens */}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
