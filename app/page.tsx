"use client";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Prices from "./components/prices";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <main className="w-full max-w-[1280px] mx-auto ">
        <Navbar />
        <Hero />
        <About />
      </main>
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}
