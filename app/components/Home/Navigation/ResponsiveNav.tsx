"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  const toggleHandler = () => setShowNav((prev) => !prev);

  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav
        nav={showNav}
        closeNav={closeNavHandler}
        toggle={toggleHandler}
      />
    </div>
  );
};

export default ResponsiveNav;
