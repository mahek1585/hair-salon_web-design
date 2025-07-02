import React from "react";
import heroImg from "../assets/Images/hero.jpg";
import logo from "../assets/Images/logo.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative w-full h-[43.75rem]">
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-[2rem] left-16 w-[14.43rem] h-[2.5rem]"
      />

      {/* Right Blur Overlay */}
      <div
        className="absolute top-0 right-0 h-full w-[40.62rem] backdrop-blur-[35px]"
        style={{ backgroundColor: "#0B1518A6" }}
      >
        {/* Navigation Links */}
        <div className="absolute top-[2rem] right-[4.37rem] flex gap-9 z-10">
          {["About", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-montesrrat font-medium text-[1rem] leading-[1rem] tracking-[0.15em] uppercase text-white hover:text-amber-300 transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Heading */}
        <div className="absolute top-[9.8125rem] left-[5.875rem] w-[25.75rem] h-[9.75rem]">
          <h1 className="font-montesrrat font-bold text-[4rem] leading-[100%] uppercase text-white">
            the<br />
            <span className="whitespace-nowrap">PERFECT CUT</span>
          </h1>
        </div>

        {/* Description */}
        <div className="absolute top-[20.31rem] left-[5.87rem] w-[25.18rem] h-[5.75rem] font-semibold text-lg text-[#CCCCCC] font-Montserrat">
          <p>We see “YOU” and we create the look that matches best your personality</p>
        </div>

        {/* Line */}
        <hr className="absolute top-[26.31rem] left-[5.87rem] w-[10rem] border-t-2 border-white rotate-180" />

        {/* Info Row */}
        <div className="absolute top-[30.31rem] left-[5.87rem] flex items-center gap-[0.62rem]">
          <span className="font-montesrrat font-bold leading-[100%] tracking-[0.4em] uppercase text-[#CCCCCC]">
            NEW YORK
          </span>
          <span className="text-[#CCCCCC] text-[1rem] font-bold">•</span>
          <span className="font-montesrrat font-bold leading-[100%] tracking-[0.4em] uppercase text-[#CCCCCC]">
            SINCE 2000
          </span>
        </div>

        {/* Left Arrow Button */}
        <div className="absolute top-[33.56rem] left-[5.87rem] w-14 h-14 bg-[#A5836ACC] flex items-center justify-center hover:bg-[#C19A5D]">
          <ChevronLeftIcon className="w-7 h-7 text-white" />
        </div>

        {/* Right Arrow Button */}
        <div className="absolute top-[33.56rem] left-[9.75rem] w-14 h-14 bg-[#A5836ACC] flex items-center justify-center hover:bg-[#C19A5D]">
          <ChevronRightIcon className="w-7 h-7 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
