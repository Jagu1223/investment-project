import Link from "next/link";
import React from "react";
import { FaXmark } from "react-icons/fa6";

//props type
type Props = {
  nav: boolean;
  toggle: () => void;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, nav, toggle }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform ${navOpenStyle} transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0 bottom-0 bg-[#29297f]`}
    >
      MobileNav
      {/* {close icon} */}
      <FaXmark
        onClick={closeNav}
        className="w-8 h-8 absolute top-8 text-white z-[202] right-8"
      />
      {/* {nav links} */}
      <ul className="relative z-[201] space-y-10 flex flex-col items-center justify-center h-full">
        {/* <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Home</Link>
        </li> */}

        <li className=" text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/" onClick={toggle}>
            Home
          </Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Investment</Link>
        </li>
        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Services</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Blog</Link>
        </li>

        <li className="text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
