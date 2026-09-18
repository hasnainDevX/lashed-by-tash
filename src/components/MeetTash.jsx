import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo1 from "../assets/image2.jpeg";
import photo2 from "../assets/image3.jpeg";
import photo3 from "../assets/image4.jpeg";
import CircularText from "./CircularText";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MeetTash = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // fades headline, paragraph and cta up together when scrolled into view, only plays once
    const ctx = gsap.context(() => {
      gsap.from([headlineRef.current, paraRef.current, ctaRef.current], {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-bone px-6 py-6 md:px-12 md:py-12 relative "
    >
      <div ref={headlineRef} className="mx-auto max-w-5xl mt-12">
        <h2 className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
          <span className="block text-4xl md:text-6xl">The Artist Behind</span>
          <span className="block text-4xl uppercase tracking-wide md:text-6xl">
            the Lashes
          </span>
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="h-96 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo1}
            alt="Tash at work"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="md:block hidden h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo2}
            alt="Tash, lash artist"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="md:block hidden h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo3}
            alt="Lash artistry detail"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
      </div>

      <div ref={paraRef} className="mx-auto mt-12 max-w-2xl">
        <p className="font-sans text-base leading-relaxed text-gunmetal/80 md:text-lg">
          Award-nominated and trusted by 400+ clients in Steinbach, MB — Tash
          built her craft around one idea: lashes that give you your mornings
          back, without ever feeling high-maintenance.
        </p>
      </div>
      <div ref={ctaRef} className="flex justify-center md:bottom-24 my-10">
        <Link
          to={"/about"}
          className=" border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Take Me to Her Story
        </Link>
      </div>
      <CircularText
        className="md:block hidden absolute z-2 top-40 right-16 uppercase"
        color="#141C19"
      />
    </section>
  );
};

export default MeetTash;