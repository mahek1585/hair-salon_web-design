import React from 'react';
import contact from "../assets/Images/contact.jpg";

const Contact = () => {
  return (
    <section className="flex w-full h-[43.75rem]">
      {/* Left Section */}
      <div className="w-1/2 h-full relative"> 
        <img
          src={contact}
          alt="Contact"
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            top-[10.37rem] left-[7.25rem]
            w-[30rem] h-[23rem]
            bg-[#00000080] backdrop-blur-[30px]
            p-2 gap-2
          "
        >
           <div className="text-white font-cormorant font-semibold text-[3.75rem] leading-[4rem] tracking-[0.10em] uppercase py-8 text-center">
            <p>We would</p>
            <p className="text-center">like to</p>
            <p>hear from</p>
            <p className="text-center">you</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full bg-[#F4EDE6] flex flex-row justify-center items-center">

     <form className="w-full max-w-[500px] mx-auto ">
        <div className="flex gap-10">
            <div className="flex-1">
              <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase">First Name</label>
              <input
                type="text"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2"
              />
            </div>

             <div className="flex-1">
              <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2"
              />
            </div>
        </div> 

         <div className="flex gap-10 mt-10">
            <div className="flex-1">
              <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase">phone</label>
              <input
                type="number"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2"
              />
            </div>

             <div className="flex-1">
              <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase">Email</label>
              <input
                type="email"
                className="w-full border-b border-black bg-transparent focus:outline-none py-2"
              />
            </div>
        </div> 

         <div className="mt-10 mb-3">
            <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase ">Interested In</label>
            <div className="flex gap-6">
              {["Hair cut", "Coloring", "Straightning"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className="font-montesrrat font-medium leading-9 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>   

           <div className='mt-10'>
            <label className="font-montesrrat text-sm font-semibold leading-9 tracking-[0.15%] uppercase ">Message</label>
            <textarea
              rows="1"
              className="w-full border-b border-black bg-transparent focus:outline-none py-2"
        
            ></textarea>
          </div>

          <div className='mt-12'>
            <button
              type="submit"
              className="bg-black text-white 
              w-[14.6rem] py-5 px-10 
              font-semibold leading-[100%] t
              racking-[0.12em] uppercase
               hover:text-black hover:bg-emerald-50  
               transition duration-300 ease-in-out cursor-pointer
              ">

            
              Send Message
            </button>
          </div>



     </form>
        
      </div>
    </section>
  );
};

export default Contact;
