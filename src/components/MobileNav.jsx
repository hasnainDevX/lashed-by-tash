import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import logo from "../assets/tlogo2.png";
import { StarIcon } from "lucide-react";

const links = [
  { name: "Home", number: "01", to: "/" },
  { name: "About", number: "02", to: "/about" },
  { name: "Services", number: "03", to: "/services" },
  { name: "Contact", number: "04", to: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkRefs = useRef([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.fromTo(
          linkRefs.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.07,
            delay: 0.25,
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
      {/* Hamburger / close button — fixed so it stays accessible while scrolling */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="fixed right-6 top-6 z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
      >
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(7.5px) rotate(45deg)" : "none",
            backgroundColor: isOpen ? "#141C19" : undefined,
          }}
        />
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          className="block h-[1.5px] w-6 bg-bone transition-all duration-300 ease-out"
          style={{
            transform: isOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
            backgroundColor: isOpen ? "#141C19" : undefined,
          }}
        />
      </button>

      {/* Dim backdrop behind the sidebar */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-30 bg-gunmetal/40 transition-opacity duration-500 md:hidden"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* Sidebar panel — slides in from the right, bone background */}
      <div
        className="fixed inset-y-0 right-0 z-40 flex w-[82%] max-w-sm flex-col overflow-y-auto bg-bone shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Same line texture as the footer / before-after section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.055) calc(8.333% - 1px), rgba(92,107,46,0.055) 8.333%)",
          }}
        />

        <div className="relative flex items-center justify-between px-6 py-6">
          <img src={logo} alt="Lashed by Tash" className="h-12 w-auto" />
        </div>

        <nav className="relative flex flex-1 flex-col justify-center gap-1 px-8 py-6">
          {links.map((link, i) => (
            <Link
              key={link.name}
              ref={(el) => (linkRefs.current[i] = el)}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="group flex items-baseline gap-4 border-b border-gunmetal/10 py-3"
            >
              <span className="font-sans text-sm text-gold">
                <StarIcon />
              </span>
              <span className="font-serif text-3xl text-gunmetal transition-colors duration-300 group-hover:text-olive">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="relative flex flex-col items-center gap-3 px-6 pb-10 pt-2">
          <p className="text-center font-serif text-sm italic text-gunmetal/60">
            Perfect lashes, without the daily effort
          </p>
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="border border-olive bg-olive px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:bg-bone hover:text-olive"
          >
            Book Now
          </Link>

          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://instagram.com/lashedby._.tash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gunmetal/60 transition-colors duration-300 hover:text-olive"
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
            <span className="h-3 w-px bg-gunmetal/20" />
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-gunmetal/40">
              Steinbach, MB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;