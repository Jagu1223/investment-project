import React from "react";
import { BiMoney } from "react-icons/bi";
import { BsCheck2Square } from "react-icons/bs";
import AboutImage from "@/public/images/about.png";
import Image from "next/image";
import SectionHeading from "../../Helper/SectionHeading";

const About = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* {Section Heading} */}

      <SectionHeading heading="About Us" />

      {/* {define grid system} */}
      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* {Text Content } */}
        <div>
          <h1 className="text-[19px] md:text-[25px] font-semibold text-white">
            A faster way to do just about anything
          </h1>
          <p className="text-white opacity-60 mt-4  ">
            Clarinet accustomed. Would legs of framework officers. We've to
            morning like a contracting him, the the to said in need gradually
            wellfeigned.
          </p>

          {/* iconList item 1*/}
          <div className="flex mt-8 items-center space-x-4  ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-pink-700 flex flex-col items-center justify-center ">
              <BsCheck2Square className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/*icon text content */}
            <div>
              <h1 className="text-white text-[16px] md:text-[22px] font-semibold">
                Licensed & Certified
              </h1>
              <p className="text-white mt-1 text-[15px] opacity-70 ">
                Lorem ipsum dolor sit amet. Lorem, ipsum.
              </p>
            </div>
          </div>
          {/* iconList item 2*/}
          <div className="flex mt-8 items-center space-x-4  ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-blue-700 flex flex-col items-center justify-center ">
              <BiMoney className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/*icon text content */}
            <div>
              <h1 className="text-white text-[16px] md:text-[22px] font-semibold">
                Savings & Investment
              </h1>
              <p className="text-white mt-1 text-[15px] opacity-70 ">
                Lorem ipsum dolor sit amet. Lorem, ipsum.
              </p>
            </div>
          </div>

          {/* iconList item 2*/}
          <div className="flex mt-8 items-center space-x-4  ">
            {/* icon box */}
            <div className="w-12 h-12 rounded-full bg-orange-500 flex flex-col items-center justify-center ">
              <BiMoney className="w-[1.3rem] h-[1.3rem] text-white" />
            </div>
            {/*icon text content */}
            <div>
              <h1 className="text-white text-[16px] md:text-[22px] font-semibold">
                100% Secure Investment
              </h1>
              <p className="text-white mt-1 text-[15px] opacity-70 ">
                Lorem ipsum dolor sit amet. Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
        {/* Image Content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src={AboutImage} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
