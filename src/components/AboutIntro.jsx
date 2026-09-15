import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photoMain from "../assets/image2.jpeg";
import photoSecondary from "../assets/image3.jpeg";

gsap.registerPlugin(ScrollTrigger);

// Small scattered-dot cluster — quiet decorative mark, not a logo or icon
const DotCluster = ({ className }) => (
  <svg
    width="56"
    height="48"
    viewBox="0 0 56 48"
    fill="none"
    className={className}
  >
    <circle cx="6" cy="8" r="3" className="fill-gunmetal/15" />
    <circle cx="22" cy="4" r="2" className="fill-gunmetal/10" />
    <circle cx="16" cy="20" r="4" className="fill-gunmetal/15" />
    <circle cx="34" cy="14" r="2.5" className="fill-gunmetal/10" />
    <circle cx="4" cy="30" r="2" className="fill-gunmetal/10" />
  </svg>
);

const stats = [
  { value: 400, suffix: "+", label: "Clients trust her" },
  { value: 7, suffix: "+", label: "Years perfecting the craft" },
];

const AboutIntro = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = { val: 0 };
        gsap.to(target, {
          val: stats[i].value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(target.val) + stats[i].suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bone px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* Text column */}
        <div className="relative">
          <DotCluster className="absolute -left-4 -top-8 md:-left-10" />

          <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-gunmetal md:text-5xl">
            Hi, I'm <span className="italic text-olive">Tash</span>
          </h2>

          <div className="mt-7 max-w-md space-y-5 font-sans text-sm leading-relaxed text-gunmetal/70 md:text-base">
            <p>
              Lash artistry found me almost by accident — what started as a
              curiosity turned into the thing I now can't imagine my days
              without. Every set I do is a small act of care, built around the
              person sitting in my chair, not a one-size-fits-all template.
            </p>
            <p>
              I'm an award-nominated certified lash artist, and over the years
              I've been trusted by more than 400 clients across Steinbach and
              the surrounding area. My goal with every appointment is simple:
              perfect lashes, without the daily effort — so you can wake up
              already feeling like yourself, just a little more polished.
            </p>
          </div>

          <div className="mt-10 flex gap-12 border-t border-gunmetal/10 pt-7">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <p
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="font-serif text-4xl font-light text-gunmetal"
                >
                  0{stat.suffix}
                </p>
                <p className="mt-1 font-sans text-xs uppercase tracking-wide text-gunmetal/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Staggered photo pair — distinct from MeetTash's grid treatment */}
        <div className="relative">
          <div className="aspect-[3/4] w-4/5 overflow-hidden">
            <img
              src={photoMain}
              alt="Tash"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 aspect-[3/4] w-1/2 overflow-hidden border-4 border-bone shadow-xl md:-right-8">
            <img
              src={photoSecondary}
              alt="Tash at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
