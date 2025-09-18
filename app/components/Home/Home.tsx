"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Feature from "./Feature/Feature";
import Price from "./Price/Price";
import Advantage from "./Advantage/Advantage";
import Investor from "./Investor/Investor";
import Review from "./Review/Review";
import Blog from "./Blog/Blog";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="investment">
        <Feature /> {/* or Investment component if you have one */}
      </section>
      <section id="services">
        <Price /> {/* or Services component */}
      </section>
      <section id="advantage">
        <Advantage />
      </section>
      <section id="investor">
        <Investor />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="blog">
        <Blog />
      </section>
    </div>
  );
};

export default Home;
