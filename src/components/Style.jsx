import React from 'react';
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";

const Style = () => {
  return (
    <section className="relative w-full h-[38rem] bg-black overflow-hidden">
      
      {/* First Image */}
      <img
        src={image1}
        alt="Image 1"
        className="absolute top-0 left-[-3.75rem] w-[49.81rem] h-[38rem] object-cover object-[0_30%] z-10"
      />

      {/* Second Image */}
      <img
        src={image2}
        alt="Image 2"
        className="absolute top-0 left-[47.93rem] w-[67.06rem] h-[37.5rem] object-cover z-20"
      />

      {/* Center Box */}
      <div className="absolute bg-[#070F12B2] backdrop-blur-[20px] w-[40.37rem] h-[21.25rem] top-[7.5rem] left-[31.06rem] text-white z-30">
        <h2 className="font-cormorant font-bold text-[3.12rem] leading-[100%] mb-5 pt-[4.31rem] px-[2.5rem]">
          Natural styling and cuts
        </h2>
        <p className="font-montesrrat font-medium text-[1.25rem] leading-[2.25rem] px-[2.5rem]">
          You dream about sleek, healthy looking hair that looks picture perfect,
          ready to rock on any occasion? We will make your dreams come true.
        </p>
      </div>
    </section>
  );
};

export default Style;
