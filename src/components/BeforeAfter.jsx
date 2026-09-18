import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import lashes from "../assets/lashes.png";
import heart from "../assets/heartelem.png"

gsap.registerPlugin(ScrollTrigger);

const BeforeAfter = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);

  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current || clientX == null) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX ?? e.touches?.[0]?.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX ?? e.touches?.[0]?.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // fades heading, paragraph and cta up together when scrolled into view, only plays once
    const ctx = gsap.context(() => {
      gsap.from([headingRef.current, paraRef.current, ctaRef.current], {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-bone py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.055) calc(8.333% - 1px), rgba(92,107,46,0.055) 12.333%)",
        }}
      />
      <img
        src={lashes}
        alt="Lash extensions"
        className="absolute z-2 left-0 md:left-12 md:top-24 -top-2 w-32 opacity-50 -rotate-12"
      />

      <img
        src={heart}
        alt="Lash extensions"
        className="absolute z-2 right-0 md:right-12 md:top-24 -top-2 opacity-50 w-32 rotate-12"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 ref={headingRef} className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
          <span className="block text-4xl md:text-6xl">The Hour That</span>
          <span className="block text-4xl uppercase tracking-wide md:text-6xl">
            Changes Everything
          </span>
        </h2>
        <div ref={paraRef} className="mx-auto mt-12 max-w-2xl">
          <p className="font-sans text-base leading-relaxed text-gunmetal/60 md:text-lg">
            Appointments take about an hour — drag the slider to see exactly
            what that hour gives back. No filters, no exaggeration, just what
            400+ Steinbach clients already know.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchMove={handlePointerMove}
        onTouchEnd={stopDragging}
        style={{ touchAction: "none" }}
        className="relative z-2 mx-auto mt-12 aspect-[4/5] w-[80%] md:w-full max-w-3xl select-none overflow-hidden md:mt-16 md:aspect-[16/9] "
      >
        <img
          src={afterImg}
          alt="After lash set"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <img
          src={beforeImg}
          alt="Before lash set"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.2em] text-bone/90">
          Before
        </span>
        <span className="absolute bottom-4 right-4 font-sans text-xs uppercase tracking-[0.2em] text-bone/90">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        <div
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          style={{ left: `${position}%`, touchAction: "none" }}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-bone shadow-lg"
        >
          <ChevronLeft className="h-4 w-4 text-gunmetal" strokeWidth={2} />
          <ChevronRight className="h-4 w-4 text-gunmetal" strokeWidth={2} />
        </div>
      </div>

      <div ref={ctaRef} className="relative z-2 flex justify-center mt-12 md:mt-16">
        <Link
          to="/booking"
          className="border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  );
};

export default BeforeAfter;