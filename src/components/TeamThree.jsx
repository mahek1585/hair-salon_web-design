import React from 'react';
import team3 from "../assets/Images/team3.jpg";

const TeamThree = () => {
  return (
    <section className="flex flex-row w-full h-[40.62rem]">
      {/* Left  Section */}
      <div className="w-1/2 h-full">
        <img
          src={team3}
          alt="Team Member"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right  Section */}
      <div className="w-1/2 h-full bg-[#F4EDE6] flex flex-col  justify-center items-center px-16">
        <h2 className="font-cormorant font-semibold text-[3.8rem]  leading-9 mb-6">
          Nancy Gibson
        </h2>
        <p className="font-montesrrat font-semibold text-[1.1rem] leading-9 tracking-[0.15em] uppercase text-black mb-8">
          hair stylist / colorist
        </p>
        <p className="font-montesrrat font-medium text-[1.3rem] leading-9 text-[#4D4D4D] mb-12">
            Designed to maintain your current colour, blend out a growing root or balance your blonde while providing full
             and demi-permanent coverage. Our custom kit can disguise grey-white hair.
        </p>
        <button className="bg-black text-white w-[17.99rem] py-5 px-10 font-semibold leading-[100%] tracking-[0.12em] uppercase hover:text-black hover:bg-emerald-50 hover:cursor-pointer">
            book appointment
        </button>
      </div>
    </section>
  );
};

export default TeamThree;
