import React from 'react';
import icon1 from "../assets/Images/icon_1.png";
import icon2 from "../assets/Images/icon_2.png";
import icon3 from "../assets/Images/icon_3.png";

const ThreeColumnLayout = () => {
  return (
    <section className="flex justify-center my-[6.5rem]">
      <div className="w-[77.81rem] h-[18.25rem] flex gap-[3.56rem]">
        
        {/* Column 1 */}
        <div className="w-[24.81rem] flex flex-col items-center">
          <img src={icon1} alt="Icon 1" className="w-[4.75rem] h-[4rem] " />
          <p className="mt-6 font-cormorant font-bold text-[1.5rem] leading-[2.25rem] tracking-[0.15em] text-center">
            PERSONALIZED EXPERIENCE
          </p>

          <p className="font-montesrrat font-medium text-[1.12rem] leading-[2.25rem]  text-center mt-6">
            Each guest is our favourite guest. Come and make sure that our service is exceptional.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-[24.81rem]  flex flex-col items-center">
          <img src={icon2} alt="Icon 2" className="w-[4.75rem] h-[4rem] " />
          <p className="mt-4 font-cormorant font-bold text-[1.5rem] leading-[2.25rem] tracking-[0.15em] text-center">
           PROFESSSIONAL<br/> CARE
          </p>

          <p className="font-montesrrat font-medium text-[1.12rem] leading-[2.25rem]  text-center mt-6">
            All products we use are professional and have proven effeciency. No compromises.
          </p>
        </div>

        {/* Column 3 */}
        <div className="w-[24.81rem] flex flex-col items-center">
          <img src={icon3} alt="Icon 3" className="w-[4.75rem] h-[4rem] " />
          <p className="mt-4 font-cormorant font-bold text-[1.5rem] leading-[2.25rem] tracking-[0.15em] text-center">
            WE CARE <br />WHAT WE DO
          </p>

          <p className="font-montesrrat font-medium text-[1.12rem] leading-[2.25rem]  text-center mt-6">
           People that you’ll meet in our studio are doing job they love. Come and make sure there is a difference.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ThreeColumnLayout;
