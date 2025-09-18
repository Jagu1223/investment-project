import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import InvestorCard from "./InvestorCard";

const Investor = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      {/* Section Heading */}

      <SectionHeading heading="Our Top Investors" />
      {/* Define grid system */}
      <div className="w-4/5 mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* Investor Profile Card 1 */}

        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <InvestorCard image="/images/i1.jpg" invest="29034893" name="John" />
          {/* Investor Profile Card 2 */}
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard image="/images/i2.jpg" invest="19034893" name="Sajal" />
        </div>

        {/* Investor Profile Card 3 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard
            image="/images/i3.jpg"
            invest="49034893"
            name="webdev"
          />
        </div>

        {/* Investor Profile Card 4 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <InvestorCard
            image="/images/i4.jpg"
            invest="39034893"
            name="warriors"
          />
        </div>
      </div>
    </div>
  );
};

export default Investor;
