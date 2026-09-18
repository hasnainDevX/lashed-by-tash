import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ctaImage from "../assets/image11.jpg";

gsap.registerPlugin(ScrollTrigger);

const FinalCta = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // fades eyebrow, heading, paragraph and cta up one after another when scrolled into view, only plays once
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
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
      ref={sectionRef}
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-fixed bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0 bg-gunmetal/60" />

      <div ref={contentRef} className="relative z-3 flex max-w-2xl flex-col items-center gap-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
          Ready when you are
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight text-bone md:text-6xl uppercase!">
          LASHES YOU DON'T HAVE TO <span className="italic">think about</span>
        </h2>
        <p className="max-w-md font-sans text-sm leading-relaxed text-bone/70 md:text-base">
          Book online in under a minute, or send a message first if you'd rather
          chat about your first set.
        </p>
        <div className="mx-auto flex max-w-5xl justify-center ">
          <Link
            to="/services"
            className="border border-bone/40 bg-olive px-8 py-3 font-sans text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-olive"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;