import React from 'react';
import bgImage from '../../assets/Images/image4.jpg';

const StyleThree = () => {
  return (
    <section
      className="relative h-[600px] w-full bg-cover bg-top"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute z-30 top-1/2 left-12 transform -translate-y-1/2 bg-[#070F12B2] backdrop-blur-[20px] w-[40rem] p-10 text-white text-left">
        <h2 className="font-cormorant font-bold text-[2.8rem] leading-[100%] mb-5">
          Natural styling and cuts
        </h2>
        <p className="font-montesrrat font-medium text-[1.2rem] leading-[2rem]">
          You dream about sleek, healthy looking hair that looks picture perfect,
          ready to rock on any occasion? We will make your dreams come true.
        </p>
      </div>
    </section>
  );
};

export default StyleThree;
