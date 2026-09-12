import React from 'react'
import ctaImage from '../assets/image11.jpg'

const FinalCta = () => {
  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-fixed bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0 bg-gunmetal/60" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
          Ready when you are
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight text-bone md:text-6xl uppercase!">
          LASHES YOU DON'T HAVE TO <span className="italic">think about</span>
        </h2>
        <p className="max-w-md font-sans text-sm leading-relaxed text-bone/70 md:text-base">
          Book online in under a minute, or send a message first if you'd
          rather chat about your first set.
        </p>
        <a
          href="#book"
          className="mt-2 bg-gold px-8 py-3 font-sans text-sm font-medium uppercase tracking-[0.15em] text-gunmetal transition-opacity duration-300 hover:opacity-80"
        >
          Book your appointment →
        </a>
      </div>
    </section>
  )
}

export default FinalCta