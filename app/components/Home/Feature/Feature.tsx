// import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBill, FaPiggyBank } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import SectionHeading from "../../Helper/SectionHeading";

import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      {/* {Section Heading} */}
      <SectionHeading heading="Why Choose Us" />
      {/* {define grid system} */}

      <div className="w-4/5 mt-16 items-center  mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* 1st feature card 1 */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <FeatureCard
            bg="bg-orange-600"
            icon={FaMoneyBill}
            heading="Fast Profit"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
        consequuntur."
          />
        </div>

        {/* 1st feature card 2 */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard
            bg="bg-red-600"
            icon={FaPiggyBank}
            heading="Instant Withdraw"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
        consequuntur."
          />
        </div>

        {/* 1st feature card 3 */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard
            bg="bg-green-600"
            icon={FaMoneyBillTransfer}
            heading="Multi-Currency"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
        consequuntur."
          />
        </div>
        {/* 1st feature card 4 */}
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard
            bg="bg-indigo-900"
            icon={BiSupport}
            heading="Customer Support"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
        consequuntur."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
