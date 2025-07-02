import React from 'react';
import insta1 from "../assets/Images/insta1.jpg";
import insta2 from "../assets/Images/insta2.jpg";
import insta3 from "../assets/Images/insta3.jpg";
import insta4 from "../assets/Images/insta4.jpg";
import insta5 from "../assets/Images/Follow Us.png";



const InstagramPosts = () => {
  return (
    <section className="w-[90rem] h-[68.75rem] mx-auto">
      {/* 1 Row */}
      <div className="flex flex-row gap-5 mt-[5.75rem] mx-[4.37rem]">

            <div className="w-[26.25rem] h-[28rem]">
                <img src={insta1} alt="Instagram 1" className="w-full h-full object-cover" />
            </div>

            <div className="w-[26.25rem] h-[28rem]">
                <img src={insta2} alt="Instagram 2" className="w-full h-full object-cover" />
            </div>

            <div className="w-[26.25rem] h-[28rem]">
                <img src={insta3} alt="Instagram 3" className="w-full h-full object-cover" />
            </div>

      </div>

      {/* 2 Row */}
      <div className="flex flex-row gap-5 mt-5 mx-[4.37rem]">

        <div className="w-[26.25rem] h-[28rem]">
          <img src={insta5} alt="Instagram 5" className="w-full h-full object-cover" />
        </div>

        <div className="w-[53.7rem] h-[28rem]">
          <img src={insta4} alt="Instagram 4" className="w-full h-full object-cover" />
        </div>

        
      </div>
    </section>
  );
};

export default InstagramPosts;
