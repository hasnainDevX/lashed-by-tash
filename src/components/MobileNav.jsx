import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/tlogo2.png";

const links = [
  { name: "Home", number: "01" },
  { name: "About", number: "02" },
  { name: "Services", number: "03" },
  { name: "Book", number: "04" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.fromTo(
          linkRefs.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            delay: 0.3,
            ease: "power3.out",
          },
        );
      });
      return () => {
        document.body.style.overflow = "";
        ctx.revert();
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger / close button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
      >
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(7.5px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{ opacity: isOpen ? 0 : 1 }}
        />
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Full-screen overlay menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-gunmetal transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden"
        style={{
          clipPath: isOpen
            ? "circle(150% at calc(100% - 40px) 40px)"
            : "circle(0% at calc(100% - 40px) 40px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* <span
          className="pointer-events-none absolute -right-6 top-1/3 select-none font-serif text-[9rem] font-light uppercase leading-none text-bone/5"
          aria-hidden="true"
        >
          LT
        </span> */}

        <div className="relative z-10 flex items-center justify-between px-6 py-6">
          <img src={logo} alt="Lashed by Tash" className="h-14 w-auto" />
        </div>

        <nav className="relative z-10 flex flex-1 flex-col justify-center gap-1 px-8 py-6">
          {links.map((link, i) => (
            <a
              key={link.name}
              ref={(el) => (linkRefs.current[i] = el)}
              href={`#${link.name.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="group flex items-baseline gap-4 border-b border-bone/10 py-3"
            >
              <span className="font-sans text-xs text-gold">{link.number}</span>
              <span className="font-serif text-3xl italic text-bone transition-colors duration-300 group-hover:text-gold">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-10 pt-2">
          <p className="text-center font-serif text-sm italic text-bone/60">
            Perfect lashes, without the daily effort
          </p>
          <a
            href="#book"
            onClick={() => setIsOpen(false)}
            className="border border-bone bg-olive px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-bone hover:text-olive"
          >
            Book Now
          </a>

          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://instagram.com/lashedby._.tash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-bone/70 transition-colors duration-300 hover:text-gold"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle
                  cx="17.2"
                  cy="6.8"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <span className="h-3 w-px bg-bone/20" />
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-bone/40">
              Steinbach, MB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
