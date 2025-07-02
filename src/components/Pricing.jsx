import React from 'react';

const Pricing = () => {
  return (
    <section className="w-full h-[37.5rem] flex bg-black">
      
      {/* Left Title */}
      <div className="w-[18.375rem] h-[7.5rem] mt-[11.31rem] ml-[8.06rem] font-cormorant font-bold text-6xl leading-[3.5rem] text-white">
        <span className="block pl-[6.6rem]">Pricing</span>
        <span className="block pl-[11.8rem]">List</span>
      </div>

      {/* Right */}
      <div className="mt-[11.81rem] ml-[3.18rem] flex flex-col gap-6">
        
        {/* Row 1 */}
        <div className="flex items-center w-[44.31rem]">
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em] uppercase">
            Hair Cut with Blow Dry
          </p>
          <hr className="w-[19rem] border border-[#383838] rotate-180" />
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em]">
            $35
          </p>
        </div>

        {/* Row 2 */}
        <div className="flex items-center w-[44.31rem]">
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em] uppercase">
            blow dry & curls
          </p>
          <hr className="w-[19rem] border border-[#383838] rotate-180" />
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em]">
            $25
          </p>
        </div>

        {/* Row 3 */}
        <div className="flex items-center w-[44.31rem]">
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em] uppercase">
            color & highlights
          </p>
          <hr className="w-[19rem] border border-[#383838] rotate-180" />
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em]">
            $100
          </p>
        </div>

        {/* Row 4 */}
        <div className="flex items-center w-[44.31rem]">
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em] uppercase">
            shampoo & set
          </p>
          <hr className="w-[19rem] border border-[#383838] rotate-180" />
          <p className="text-white font-montesrrat font-semibold text-[1.25rem] leading-[2.25rem] tracking-[0.15em]">
            $45
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
