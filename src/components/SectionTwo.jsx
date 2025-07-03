import React from "react";
import image from "../assets/Images/image.png";

const SectionTwo = () => {
  return (
    <section className="relative w-full mx-auto h-[43.75rem] bg-black flex pl-[5.62rem]">
      {/* Left Content */}
      <div className="mt-[10.43rem]">
        {/* ABOUT Heading */}
        <h3 className="text-[#C19A5D] font-montserrat font-semibold text-[1.25rem] leading-[100%] tracking-[0.15em] uppercase mb-6">
          About
        </h3>

        {/* Main Heading */}
        <h2 className="text-white font-cormorant font-bold text-[3.375rem] leading-[100%] mb-6">
          We tell amazing stories with hair
        </h2>

        {/* Description */}
        <p className="text-[#C0C0C0] font-montserrat font-medium text-[1.25rem] leading-[2.25rem] mb-12">
          You dream about sleek, healthy looking hair that looks picture perfect,<br />
          ready to rock on any occasion? We will make your dreams come true.
        </p>

        {/*  Button */}
        <button
          className="text-white border border-white px-8 py-2 font-montserrat font-semibold text-[1rem] leading-[2.25rem] tracking-[0.12em] uppercase hover:bg-emerald-50 hover:text-black transition"
        >
          View More
        </button>
      </div>

      {/* Right Image */}
      <div className="ml-auto">
        <img
          src={image}
          alt="Side Visual"
          className="w-[37.5rem] h-[43.75rem] object-cover"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
