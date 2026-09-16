import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import lashes from "../assets/lashes.png";

const BeforeAfter = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // percentage from left
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

  return (
    <section className="relative overflow-hidden bg-bone py-20 md:py-28">
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
        className="absolute z-10 left-0 md:left-12 md:top-24 -top-2 w-32 opacity-50 -rotate-12"
      />

      <img
        src={lashes}
        alt="Lash extensions"
        className="absolute z-10 right-0 md:right-12 md:top-24 -top-2 opacity-50 w-32 rotate-12"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
          <span className="block text-4xl md:text-6xl">The Hour That</span>
          <span className="block text-4xl uppercase tracking-wide md:text-6xl">
            Changes Everything
          </span>
        </h2>
        <div className="mx-auto mt-12 max-w-2xl">
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
        className="relative z-10 mx-auto mt-12 aspect-[4/5] w-[80%] md:w-full max-w-3xl select-none overflow-hidden md:mt-16 md:aspect-[16/9] "
      >
        {/* After image — base layer, always full size */}
        <img
          src={afterImg}
          alt="After lash set"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before image — same full size, clipped via clip-path so no width hacks needed */}
        <img
          src={beforeImg}
          alt="Before lash set"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* Labels */}
        <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.2em] text-bone/90">
          Before
        </span>
        <span className="absolute bottom-4 right-4 font-sans text-xs uppercase tracking-[0.2em] text-bone/90">
          After
        </span>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-bone shadow-lg"
          style={{ left: `${position}%` }}
        >
          <ChevronLeft className="h-4 w-4 text-gunmetal" strokeWidth={2} />
          <ChevronRight className="h-4 w-4 text-gunmetal" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
