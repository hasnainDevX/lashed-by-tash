import React from "react";
import heroimage from "../assets/image4.jpeg";
import logo from "../assets/tlogo2.png";
import side1 from "../assets/image9.jpeg";
import side2 from "../assets/image6.jpeg";
import side3 from "../assets/image7.jpeg";
import side4 from "../assets/image8.jpeg";
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
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // 1s lag smooths out scroll jitter instead of tracking scrollY 1:1
        },
      })
      gsap.to(rightRef.current, {
        x: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert() // cleans up ScrollTrigger instances on unmount, prevents duplicate triggers on hot reload
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-gunmetal">
      {/* Background photo */}
      <img
        src={heroimage}
        alt="Lashed by Tash"
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

      {/* Oversized wordmark */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 text-center md:pt-20">
        <h1
          className="font-serif font-light uppercase leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px #FAF9F5",
            fontSize: "clamp(3.5rem, 16vw, 11rem)",
          }}
        >
          Lashed
        </h1>
        <p className="mt-3 font-serif text-2xl italic text-bone md:text-3xl">
          by Tash
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-bone my-3">
          Perfect lashes, without the daily effort
        </p>
      </div>

      {/* Side taglines — desktop */}
      <div className="absolute inset-x-0 bottom-10 z-10 hidden items-center justify-between px-12 md:flex">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-bone">
          400+ clients trust her
        </p>
      </div>

      {/* Same taglines — mobile, stacked */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center md:hidden">
        <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-bone">
          Award-nominated lash artistry in Steinbach, MB
        </p>
      </div>

     {/* Left photo pair — GSAP-driven drift, no React state */}
      <div
        ref={leftRef}
        className="absolute left-2 top-[50%] z-10 hidden -translate-y-1/2 flex-col gap-4 md:left-10 md:flex"
      >
        <img src={side1} alt="" className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28" />
        {/* <img src={side2} alt="" className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28" /> */}
      </div>

      {/* Right photo pair — GSAP-driven drift, opposite direction */}
      <div
        ref={rightRef}
        className="absolute right-2 top-[50%] z-10 hidden -translate-y-1/2 flex-col gap-4 md:right-10 md:flex"
      >
        <img src={side3} alt="" className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28" />
        {/* <img src={side4} alt="" className="h-24 w-24 object-cover shadow-lg md:h-28 md:w-28" /> */}
      </div>

      {/* cta  */}
      <div className="absolute inset-x-0 z-10 flex justify-center md:bottom-24">
        <a
          href="#book"
          className=" border border-white px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
