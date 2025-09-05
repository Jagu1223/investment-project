import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-20 pb-16 bg-[#5507e1]">
      {/* {Section Heading} */}

      <SectionHeading heading="Our Price" />

      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-16">
        {/* Price card 1 */}

        <PriceCard
          bg="bg-teal-700"
          days="20"
          percentage="100"
          percentageColor="bg-orange-600"
          minInvest="100"
          maxInvest="1000"
        />

        {/* Price card 2 */}

        <PriceCard
          bg="bg-red-900"
          days="30"
          percentage="300"
          percentageColor="bg-green-600"
          minInvest="300"
          maxInvest="3000"
        />

        {/* Price card 3 */}

        <PriceCard
          bg="bg-green-900"
          days="50"
          percentage="500"
          percentageColor="bg-blue-600"
          minInvest="500"
          maxInvest="5000"
        />
      </div>
    </div>
  );
};

export default Price;
