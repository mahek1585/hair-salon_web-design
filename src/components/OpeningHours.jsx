import React from 'react';

const OpeningHours = () => {
  return (
    <section className="relative w-full h-[43.75rem] bg-[#F4EDE6] flex items-center justify-center">
      {/* Left Content */}
      <div className="flex flex-col justify-center h-full ">
        <h3 className="text-black font-montesrrat font-semibold text-[1.25rem] leading-[100%] tracking-[0.15em] uppercase mb-[0.75rem] pl-[6.375rem]">
          Welcome
        </h3>

        <h2 className="text-black font-cormorant font-semibold text-[3.75rem] leading-[100%] mb-[2.5rem]">
          Opening Hours
        </h2>

        {/* Button */}
        <div className="pl-[6.37rem]">
          <button className="text-white bg-black py-[0.5rem] px-[2rem] font-montesrrat font-semibold text-[1rem] leading-[2.25rem] tracking-[0.12em] uppercase hover:bg-white hover:text-black transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="w-[0.125rem] h-[15.9375rem] bg-black mx-[4rem]"></div>

      {/* Right Content */}
      <div className="w-[31.5625rem] ">
        <p className="font-montesrrat font-semibold text-[1.375rem] leading-[2.25rem] tracking-[0.15em] text-black mb-[2.8125rem]">
          MONDAY TO FRIDAY /08:00 -20:00
        </p>
        <p className="font-montesrrat font-semibold text-[1.375rem] leading-[2.25rem] tracking-[0.15em] text-black mb-[2.8125rem]">
          SATURDAY / 10:00 - 18:00
        </p>
        <p className="font-montesrrat font-semibold text-[1.375rem] leading-[2.25rem] tracking-[0.15em] text-black">
          SUNDAY / 10:00 - 18:00
        </p>
      </div>
    </section>
  );
};

export default OpeningHours;
