import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const testimonialItems = [
  {
    quote:
      "I can't thank you enough for these lashes — I've put them through so much and still have quite a few standing.",
  },
  {
    quote:
      "10/10 recommend. The first visit felt so comfortable, we had so many laughs — you're amazing and made me feel at home right away.",
  },
  {
    quote:
      "Everywhere I've been today I got so many compliments on my lashes. You're the absolute best.",
  },
  {
    quote:
      "You killed it! Booked my future appointments too — thanks for making the service so comfortable and quick, you're a gem!",
  },
  {
    quote: "The absolute best of the best — doubles as a personal therapist too!",
  },
  {
    quote: "The best way to start your day. You guys mean the world to me.",
  },
  {
    quote: "Thanks again for fitting me in! Love the lashes, they are seriously perfect.",
  },
  {
    quote:
      "I need to get them done again — seeing your work all the time makes me want them even more. You're so talented.",
  },
];

export const InfiniteMovingCards = ({
  items = testimonialItems,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // clones the cards for the infinite loop, then sets direction/speed
    // (speed doubles up on mobile so it doesn't feel dead on small screens)
    addAnimation();

    const mql = window.matchMedia("(max-width: 767px)");
    const handleChange = () => getSpeed();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (!containerRef.current) return;

    const baseDuration = speed === "fast" ? 80 : speed === "normal" ? 100 : 180;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const duration = isMobile ? baseDuration / 2 : baseDuration;

    containerRef.current.style.setProperty("--animation-duration", `${duration}s`);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="group relative w-[340px] max-w-full shrink-0 overflow-hidden border border-gunmetal/30 bg-white px-8 py-8 transition-colors duration-300 hover:border-olive/40 md:w-[420px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent 0, transparent calc(12.5% - 1px), rgba(92,107,46,0.05) calc(12.5% - 1px), rgba(92,107,46,0.05) 12.6%)",
              }}
            />

            <blockquote className="relative">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-500 group-hover:text-yellow-400 md:h-4 md:w-4"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="mt-5 font-serif text-lg leading-relaxed text-black">
                "{item.quote}"
              </p>
              <div className="mt-6 h-px w-8 bg-olive/40 transition-all duration-300 group-hover:w-14" />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;