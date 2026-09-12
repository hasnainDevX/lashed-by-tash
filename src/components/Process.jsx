import React from "react";
import processVideo from "../assets/work.mp4";
import lashesIcon from "../assets/lashes.png";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "A quick chat about your eye shape, lifestyle, and the look you want — no guesswork, no generic sets.",
  },
  {
    number: "02",
    title: "Custom Mapping",
    description:
      "Every lash is mapped to your natural lash line for a set that suits you, not a one-size-fits-all template.",
  },
  {
    number: "03",
    title: "Application",
    description:
      "Relax for the appointment while each extension is placed by hand, one lash at a time.",
  },
  {
    number: "04",
    title: "Aftercare",
    description:
      "Simple aftercare guidance so your set lasts, plus fill reminders so you never have to think about timing.",
  },
];

const Process = () => {
  return (
    <section className="relative w-full overflow-hidden bg-bone">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column — ghost word + steps + statement card, stretched full height */}
        <div className="relative flex flex-col px-6 py-20 md:px-12 md:py-28">
          <span
            className="pointer-events-none absolute left-12 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-90 select-none whitespace-nowrap font-serif text-[7rem] font-light uppercase leading-none  md:block md:text-[9rem] text-olive"
            aria-hidden="true"
          >
            Process
          </span>

          <h2 className="my-12 block md:hidden font-serif text-5xl font-extralight uppercase text-gunmetal md:text-5xl">
            Our <span className="italic">Process</span>
          </h2>

          <div className="relative z-10 flex flex-col gap-8 md:gap-24 md:pl-20">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg italic text-gold">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wide text-gunmetal md:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-md font-sans text-sm leading-relaxed text-gunmetal/70 md:text-base">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="mt-4 h-20 w-full max-w-md opacity-40"
                    style={{
                      backgroundImage: `url(${lashesIcon})`,
                      backgroundRepeat: "repeat-x",
                      backgroundSize: "auto 100%",
                      backgroundPosition: "left center",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* cta  */}
          <div className="flex justify-center my-16 hover:border hover:border-gunmetal transition-colors duration-300">
            <a
              href="/services"
              className=" border border-white px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
            >
              Explore Services
            </a>
          </div>

          {/* Statement card — pinned to bottom, fills the leftover space */}
          <div className="md:block hidden relative z-10 max-w-md py-2 md:mt-40 md:ml-10 ">
            <p className="font-serif text-xl italic leading-snug text-gunmetal md:text-2xl border-l-2 pl-6 border-gold">
              "No two sets are the same — every appointment starts with actually
              looking at your eyes, not just picking a size off a chart."
            </p>
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/50">
              — Tash, Lashed by Tash
            </p>
          </div>
        </div>

        {/* Right column — video */}
        <div className="h-full w-full md:h-auto">
          <video
            src={processVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
