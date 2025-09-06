import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import advantangeImage from "@/public/images/advantage.png";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="pt-20 pb-16 bg-[#001232]">
      {/* {Section Heading} */}

      <SectionHeading heading="Our Advantage" />
      {/* Define grid system */}

      <div className="w-4/5 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Content */}

        <div>
          <h1 className="text-lg md:text-2xl  font-semibold text-white">
            We are Offering 100% Guarantee.
          </h1>
          <p className="text-white opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            doloremque fugit rem, pariatur cum dolorem accusamus laboriosam
            fugiat sint nihil minima possimus asperiores fuga iste dicta ipsa
            velit repudiandae quo.
          </p>
          <p className="text-white opacity-60 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            doloremque fugit rem, pariatur cum dolorem accusamus laboriosam
            fugiat sint nihil minima possimus asperiores fuga iste dicta ipsa
            velit repudiandae quo.
          </p>
        </div>
        {/* Image content */}
        <Image src={advantangeImage} alt="Advantage" />
      </div>
    </div>
  );
};

export default Advantage;
