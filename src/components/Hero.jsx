import React from "react";
import heroVideo from "../assets/work2.mp4";
import logo from "../assets/tlogo2.png";
import side1 from "../assets/image9.jpeg";
import side2 from "../assets/image6.jpeg";
import side3 from "../assets/image7.jpeg";
import side4 from "../assets/image8.jpeg";
import CircularText from "./CircularText";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const links = ["Home", "About", "Services", "Book"];
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        x: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(rightRef.current, {
        x: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gunmetal"
    >
      {/* Background video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gunmetal/40" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <img
          src={logo}
          alt="Lashed by Tash"
          className="h-12 w-auto scale-200"
        />

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-sans text-sm uppercase tracking-[0.2em] text-bone hover:underline underline-offset-8"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="font-sans text-xs uppercase tracking-[0.2em] text-bone md:hidden">
          Menu
        </button>
      </nav>

      {/* Wordmark — now flex-1, vertically centered in whatever space remains between nav and bottom content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1
          className="flex items-baseline gap-3 whitespace-nowrap font-serif font-light uppercase leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px #FAF9F5",
            fontSize: "clamp(2rem, 9vw, 6rem)",
          }}
        >
          <span>Lashed</span>
          <span
            className="font-serif italic normal-case text-bone"
            style={{ WebkitTextStroke: "0px", fontSize: "0.6em" }}
          >
            by
          </span>
          <span>Tash</span>
        </h1>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-bone my-3">
          Perfect lashes, without the daily effort
        </p>
        {/* cta  */}
        <div className="z-10 flex justify-center my-4">
          <a
            href="#book"
            className=" border border-white px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Side taglines — desktop */}
      <div className="relative z-10 hidden items-center justify-between px-12 pb-10 md:flex">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-bone">
          400+ clients trust her
        </p>
      </div>

      {/* Same taglines — mobile, stacked */}
      <div className="relative z-10 flex justify-center pb-6 md:hidden">
        <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-bone">
          Award-nominated lash artistry in Steinbach, MB
        </p>
      </div>

      {/* Left photo pair — GSAP-driven drift*/}
      <div
        ref={leftRef}
        className="absolute left-2 top-[50%] z-10 hidden -translate-y-1/2 flex-col gap-4 md:left-10 md:flex"
      >
        <img
          src={side1}
          alt=""
          className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28"
        />
      </div>

      {/* Right photo pair — GSAP-driven drift, opposite direction */}
      <div
        ref={rightRef}
        className="absolute right-2 top-[50%] z-10 hidden -translate-y-1/2 flex-col gap-4 md:right-10 md:flex"
      >
        <img
          src={side3}
          alt=""
          className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28"
        />
      </div>

      <CircularText className="absolute bottom-14 right-4 z-10 md:bottom-0 md:top-auto" />
    </section>
  );
};

export default Hero;
