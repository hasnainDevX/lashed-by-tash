import React from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck } from 'lucide-react'
import portrait from '../assets/image10.jpeg'
import logo from "../assets/tlogo.png"

const standards = [
  'Certified & award-nominated lash artist',
  'Every set custom-mapped to your eye shape — no templates',
  '40%+ retention required before any fill, no shortcuts',
  'Patch test available on request for first-time clients',
]

const Statement = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:gap-16">
        {/* Vertical ghost word — desktop only */}
        <span
          className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-serif text-[10rem] font-light uppercase tracking-widest text-gunmetal/10 md:block"
          aria-hidden="true"
        >
          Tash
        </span>

        <img
          src={logo}
          alt="Lash extensions"
          className="absolute z-10 right-0 md:right-6 md:top-4 -top-2 opacity-50 md:w-72 w-32 rotate-12"
        />

        {/* Portrait */}
        <div className="relative z-10 mx-auto w-full max-w-xs flex-shrink-0 md:mx-0">
          <img
            src={portrait}
            alt="Tash, lash artist"
            className="h-[420px] w-full rounded-sm object-cover"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col gap-8">
          <div className="font-serif text-2xl font-light italic leading-snug text-gunmetal md:text-3xl">
            No templates. No guesswork.
            <br />
            Just lashes that fit you.
          </div>

          <ul className="flex flex-col gap-4 font-sans text-sm leading-relaxed text-gunmetal md:text-base">
            {standards.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link
              to="/booking"
              className="inline-block border border-gunmetal bg-olive px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-olive"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statement