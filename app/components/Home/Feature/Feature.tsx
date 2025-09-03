import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBill, FaPiggyBank } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Feature = () => {
  return (
    <div className="pt-20 pb-16 bg-[#032055]">
      <div className="text-center p-2">
        <h1 className="text-[22px] md:text-[30px] text-white font-semibold">
          Why Choose Us
        </h1>
        <h1 className="text-[15px] mt-1 md:text-[17px] text-white opacity-70">
          We use the latest technologies and tools in order to create a better
          code
        </h1>
      </div>

      {/* {define grid system} */}

      <div className="w-4/5 mt-16 items-center  mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* 1st feature card */}
        <div>
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-orange-600 rounded-md shadow-md">
            {/* icon */}
            <FaMoneyBill className="mx-auto mt-8 w-16 h-16 text-white" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold">
              Fast Profit
            </h1>
            <p className=" text-center text-white  opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              consequuntur.
            </p>
          </div>
        </div>

        {/* 2nd feature card */}
        <div>
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-red-600 rounded-md shadow-md">
            {/* icon */}
            <FaPiggyBank className="mx-auto mt-8 w-16 h-16 text-white" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold">
              Instant Withdraw
            </h1>
            <p className=" text-center text-white  opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              consequuntur.
            </p>
          </div>
        </div>

        {/* 3rd feature card */}
        <div>
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-green-600 rounded-md shadow-md">
            {/* icon */}
            <FaMoneyBillTransfer className="mx-auto mt-8 w-16 h-16 text-white" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold">
              Multi-Currency
            </h1>
            <p className=" text-center text-white  opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              consequuntur.
            </p>
          </div>
        </div>

        {/* 4th feature card */}
        <div>
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 bg-indigo-900 rounded-md shadow-md">
            {/* icon */}
            <BiSupport className="mx-auto mt-8 w-16 h-16 text-white" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold">
              Customer Support
            </h1>
            <p className=" text-center text-white  opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
