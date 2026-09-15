import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "../assets/image13.jpg";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: "I can't thank you enough for these lashes — I've put them through so much and still have quite a few standing.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-16 md:left-10 md:translate-x-0 md:translate-y-0",
  },
  {
    text: "10/10 recommend. The first visit felt so comfortable, we had so many laughs — you're amazing and made me feel at home right away.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-36 md:right-10 md:left-[unset] md:translate-x-0 md:translate-y-0",
  },
  {
    text: "Everywhere I've been today I got so many compliments on my lashes. You're the absolute best.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:bottom-40 md:left-12 md:top-[unset] md:translate-x-0 md:translate-y-0",
  },
  {
    text: "You killed it! Booked my future appointments too — thanks for making the service so comfortable and quick, you're a gem!",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:bottom-16 md:right-12 md:left-[unset] md:top-[unset] md:translate-x-0 md:translate-y-0",
  },
  {
    text: "The absolute best of the best — doubles as a personal therapist too!",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/3 md:left-1/3",
  },
  {
    text: "The best way to start your day. You guys mean the world to me.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1 md:right-10 md:left-[unset] md:translate-x-0 md:translate-y-0",
  },
  {
    text: "Thanks again for fitting me in! Love the lashes, they are seriously perfect.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-1/2",
  },
  {
    text: "I need to get them done again — seeing your work all the time makes me want them even more. You're so talented.",
    position:
      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-12 md:right-1/2 md:left-[unset] md:translate-x-0 md:translate-y-0",
  },
];

const HeartStatement = () => {
  const wrapperRef = useRef(null);
  const pinRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      const OFF_SCREEN = 900;

      const jitter = cards.map(() => ({
        x: gsap.utils.random(-40, 40),
      }));

      gsap.set(cards, { y: OFF_SCREEN, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=3200",
          pin: pinRef.current,
          scrub: 1,
        },
      });

      tl.to(cards, {
        y: 0,
        x: (i) => jitter[i].x,
        duration: 1.2,
        stagger: { each: 0.3, from: "random" },
        ease: "power2.out",
      });

      tl.to({}, { duration: 1 });

      const exitTargets = cards.slice(0, -1);
      tl.to(exitTargets, {
        y: -OFF_SCREEN,
        duration: 1.2,
        stagger: { each: 0.25, from: "random" },
        ease: "power2.in",
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative w-full">
      {/* <h2 className="md:hidden block font-serif text-4xl font-extralight uppercase text-gunmetal md:text-5xl">
          What My<span className="italic">Client</span> Say
        </h2> */}
      <div
        ref={pinRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden px-4"
      >
        {/* Real section heading — does not affect layout or GSAP */}
        <div className="block md:hidden pointer-events-none absolute left-1/2 top-7 z-[15] w-full -translate-x-1/2 px-6 text-center md:top-10">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-olive">
            Testimonials
          </p>

          <h2 className="mt-2 font-serif text-4xl font-light leading-none tracking-[-0.03em] text-gunmetal md:text-6xl">
            What My Clients Say
          </h2>
        </div>
        {/* Ghost heading — same treatment as "PROCESS", sized to bleed off the photo's edges */}
        <span
          className="pointer-events-none absolute z-0 select-none whitespace-nowrap font-serif text-[3rem] font-light uppercase leading-none text-gunmetal md:text-[12rem] md:block hidden"
          aria-hidden="true"
        >
          Client Love
        </span>

        <img
          src={portrait}
          alt="Tash, lash artist"
          className="relative z-10 h-[65vh] w-full max-w-2xl object-cover opacity-60"
        />

        {quotes.map((quote, i) => (
          <article
            key={quote.text}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`absolute z-20 w-64 overflow-hidden border border-olive/20 bg-bone p-6 text-gunmetal shadow-[0_18px_45px_rgba(20,28,25,0.14)] md:w-80 md:p-7 ${quote.position}`}
          >
            {/* Small olive edge */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[3px] bg-olive"
            />

            {/* Abstract outline shapes */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute h-40 w-40 rounded-full border border-olive/20 ${
                i % 2 === 0 ? "-right-16 -top-16" : "-bottom-20 -right-14"
              }`}
            />

            <div
              aria-hidden="true"
              className={`pointer-events-none absolute h-20 w-32 rounded-[50%] border border-[#A88B3F]/25 ${
                i % 2 === 0 ? "-bottom-10 -left-10" : "-left-12 -top-10"
              }`}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-olive">
                  Client Note
                </span>

                <span className="h-px w-8 bg-[#A88B3F]/60" />
              </div>

              <p className="mt-5 font-serif text-[1.05rem] font-light leading-[1.5] text-gunmetal md:text-lg">
                {quote.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HeartStatement;
