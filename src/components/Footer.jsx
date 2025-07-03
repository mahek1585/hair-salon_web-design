import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black w-full flex flex-col min-h-[30.7rem] pt-32">
      
      {/* Top Content */}
      <div className="flex justify-between items-start px-20 flex-wrap">
        
        {/* Left Section */}
        <div className="text-white">
          <div className="mb-6">
            <span className="border-2 border-white py-1 px-2 font-montesrrat font-semibold text-[1.25rem] leading-9 tracking-[0.15em] uppercase">
              The
            </span>
            <span className="ml-2 font-montesrrat font-semibold text-[1.25rem] leading-9 tracking-[0.15em] uppercase">
              perfect cut
            </span>
          </div>

          <p className="font-montesrrat font-medium leading-7 text-[#B3B3B3] mb-6">
            B 35, Some street address, New York
          </p>

          <div className="flex gap-5 mt-16">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:translate-y-[-4px]"
            >
              <FaInstagram className="text-black transition duration-300 hover:text-[#E1306C]" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition duration-300 hover:translate-y-[-4px]"
            >
              <FaFacebookF className="text-black transition duration-300 hover:text-blue-500" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:translate-y-[-4px] transition duration-300"
            >
              <FaPinterestP className="text-black transition duration-300 hover:text-red-400" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="font-montesrrat mt-4">
          <p className="font-semibold text-[20px] text-[#B3B3B3] leading-9 tracking-[0.15em] uppercase mb-3">
            opening hours
          </p>
          <p className="font-semibold leading-7 text-white mb-3">
            Working days / 08:00 - 20:00
          </p>
          <p className="font-semibold leading-7 text-white mb-3">
            Saturday / 08:00 - 20:00
          </p>
          <p className="font-semibold leading-7 text-white">
            Sunday / CLOSED
          </p>
        </div>

        {/* Right Section */}
        <div className="font-montesrrat mt-4 max-w-[20rem]">
          <p className="font-semibold text-[20px] leading-9 text-[#B3B3B3] mb-5">
            Stay informed about our monthly promotions, products & more
          </p>

          <label className="text-white text-sm font-semibold leading-9 tracking-[0.15em] uppercase mb-2 block">
            Email
          </label>
          <input
            type="email"
            className="w-full border-b border-white bg-transparent focus:outline-none"
          />

          <button
            type="submit"
            className="bg-white text-black mt-8 w-[7.8rem] px-10 font-semibold leading-9 tracking-[0.16em] uppercase hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-auto text-center pt-10">
        <p className="font-montesrrat font-semibold text-sm leading-9 tracking-[0.15em] text-[#AAAAAA] uppercase">
          © Designed by Swami Nawale
        </p>
      </div>
    </footer>
  );
};

export default Footer;
