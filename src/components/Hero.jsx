import React from "react";
import heroImg from "../assets/Images/hero.jpg";
import logo from "../assets/Images/logo.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; 

const Hero = () => {
  return (
    <section className="relative w-full h-[700px]">
      {/* Hero Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover"
      />
       <img
       src={logo}
       alt="Logo"
       className="absolute top-[32px] left-16 w-[231px] h-[40px] "
     /> 

      {/* Right Blur Overlay */}
<div
  className="absolute top-0 right-0 h-full w-[650px] backdrop-blur-[35px]"
  style={{ backgroundColor: "#0B1518A6" }}
>
  {/* Navigation Links */}
 <div className="absolute top-[32px] right-[70px] flex gap-9 z-10">
    {["About", "Pricing", "Contact"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="font-montserrat font-medium text-[16px] leading-[16px] tracking-[0.15em] uppercase text-white hover:text-amber-300 transition duration-200"
      >
        {item}
      </a>
    ))}
   </div> 

  

  <div className="absolute top-[157px] left-[94px] w-[412px] h-[156px]">
  <h1 className="font-montesrrat font-bold text-[64px] leading-[100%] uppercase text-white">
    the<br></br>
    <span className="whitespace-nowrap">PERFECT CUT</span>
  </h1>
 </div> 

  <div className="absolute top-[325px]  left-[94px] w-[403px] h-[92px] font-semibold text-lg text-[#CCCCCC] font-Montserrat">
    <p>We see “YOU” and we create the look that matches best your personality</p>

 </div> 

 <hr
  className="absolute top-[421px] left-[94px] w-[160px] border-t-2 border-white rotate-180"
 /> 
   <div
    className="absolute top-[485px] left-[94px] flex items-center gap-[10px]"
   >
   <span className="font-montserrat font-bold  leading-[100%] tracking-[0.4em] uppercase text-[#CCCCCC]">
    NEW YORK
    </span>

   <span className="text-[#CCCCCC] text-[16px] font-bold">•</span>

   <span className="font-montserrat font-bold  leading-[100%] tracking-[0.4em] uppercase text-[#CCCCCC]">
    SINCE 2000
  </span>
 </div> 

 <div
    className="absolute top-[537px] left-[94px] w-14 h-14 bg-[#A5836ACC] flex items-center justify-center gap-3">
  <ChevronLeftIcon className="w-7 h-7 text-white" />
 </div> 

   <div
  className="absolute top-[537px] left-[156px] w-14 h-14 bg-[#A5836ACC] flex items-center justify-center"
  >
   <ChevronRightIcon className="w-7 h-7 text-white" />
   </div>  

</div>

    </section>
  );
};

export default Hero;