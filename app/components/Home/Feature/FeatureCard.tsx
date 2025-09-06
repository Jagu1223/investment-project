import React from "react";
import { FaMoneyBill } from "react-icons/fa";
// type Props

type Props = {
  bg: string;
  icon: React.ElementType;
  heading: string;
  paragraph: string;
};
const FeatureCard = ({ bg, icon: Icon, heading, paragraph }: Props) => {
  return (
    <div
      className={`p-6 cursor-pointer hover:scale-110 transition-all duration-300 ${bg} rounded-md shadow-md`}
    >
      {/* icon */}
      <Icon className="mx-auto mt-8 w-16 h-16 text-white" />

      <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold">
        {heading}
      </h1>

      <p className=" text-center text-white opacity-70">{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
