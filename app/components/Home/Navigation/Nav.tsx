import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
//props type
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-[#62269d] shadow-md ">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        {/* {Logo} */}
        <h1 className="text-[16px] md:text-[25px] font-bold text-white">
          <span className="text-[27px] md:text-[40px] text-yellow-300">IN</span>
          Vestor
        </h1>
        {/* {Nav Links} */}
        {/* in small screen it will be hidden - Home About */}
        <ul className=" hidden lg:flex items-center space-x-10">
          <li className="text-[17px] font-semibold cursor-pointer text-yellow-300">
            <Link href="/">Home</Link>
          </li>

          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/About">About</Link>
          </li>

          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Investment</Link>
          </li>

          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200  text-white hover:text-yellow-400">
            <Link href="/">Services</Link>
          </li>

          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Blog</Link>
          </li>

          <li className="text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        {/* {Login Button and navbar menu} */}
        <div className="flex items-center space-x-4 ">
          {/* {Login button} */}
          <button
            suppressHydrationWarning
            className="rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Login
          </button>

          {/* {burger menu} */}
          <FaBars
            onClick={openNav}
            className="w-8 h-8  text-white cursor-pointer lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
