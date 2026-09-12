import React from 'react'
import portrait from '../assets/image10.jpeg'

const Statement = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:gap-16">
        {/* Vertical ghost word — desktop only */}
        <span
          className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-serif text-[10rem] font-light uppercase tracking-widest text-gunmetal md:block"
          aria-hidden="true"
        >
          Tash
        </span>

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
            Patient with every client.
            <br />
            Precise in every set.
            <br />
            Obsessed with the small details.
          </div>

          <div className="flex flex-col gap-4 font-sans text-sm leading-relaxed text-gunmetal md:text-base">
            <p>
              I started Lashed by Tash to give people one less thing to think
              about every morning — lashes that look done without ever
              feeling high-maintenance.
            </p>
            <p>
              Award-nominated and trusted by 400+ clients in Steinbach, MB,
              every set is mapped by hand to fit your eye shape, your
              lifestyle, and how much upkeep you actually want.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statement