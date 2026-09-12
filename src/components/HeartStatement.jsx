import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portrait from '../assets/image13.jpg'

gsap.registerPlugin(ScrollTrigger)

const quotes = [
  {
    text: "I can't thank you enough for these lashes — I've put them through so much and still have quite a few standing.",
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-16 md:left-10 md:translate-x-0 md:translate-y-0',
  },
  {
    text: "10/10 recommend. The first visit felt so comfortable, we had so many laughs — you're amazing and made me feel at home right away.",
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-36 md:right-10 md:left-[unset] md:translate-x-0 md:translate-y-0',
  },
  {
    text: "Everywhere I've been today I got so many compliments on my lashes. You're the absolute best.",
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:bottom-40 md:left-12 md:top-[unset] md:translate-x-0 md:translate-y-0',
  },
  {
    text: 'Award-nominated and trusted by 400+ clients across Steinbach, MB.',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:bottom-16 md:right-12 md:left-[unset] md:top-[unset] md:translate-x-0 md:translate-y-0',
  },
  {
    text: 'The absolute best of the best — doubles as a personal therapist too!',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/3 md:left-1/3',
  },
  {
    text: 'The best way to start your day. You guys mean the world to me.',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1 md:right-10 md:left-[unset] md:translate-x-0 md:translate-y-0',
  },
  {
    text: 'Thanks again for fitting me in! Love the lashes, they are seriously perfect.',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-1/2',
  },
  {
    text: "I need to get them done again — seeing your work all the time makes me want them even more. You're so talented.",
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-12 md:right-1/2 md:left-[unset] md:translate-x-0 md:translate-y-0',
  },
]

const HeartStatement = () => {
  const wrapperRef = useRef(null)
  const pinRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current
      const OFF_SCREEN = 900

      const jitter = cards.map(() => ({
        x: gsap.utils.random(-40, 40),
      }))

      gsap.set(cards, { y: OFF_SCREEN, opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=3200',
          pin: pinRef.current,
          scrub: 1,
        },
      })

      tl.to(cards, {
        y: 0,
        x: (i) => jitter[i].x,
        duration: 1.2,
        stagger: { each: 0.3, from: 'random' },
        ease: 'power2.out',
      })

      tl.to({}, { duration: 1 })

      const exitTargets = cards.slice(0, -1)
      tl.to(exitTargets, {
        y: -OFF_SCREEN,
        duration: 1.2,
        stagger: { each: 0.25, from: 'random' },
        ease: 'power2.in',
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={wrapperRef} className="relative w-full">
      <div
        ref={pinRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden px-4"
      >
        {/* Ghost heading — same treatment as "PROCESS", sized to bleed off the photo's edges */}
        <span
          className="pointer-events-none absolute z-0 select-none whitespace-nowrap font-serif text-[6rem] font-light uppercase leading-none text-gold md:text-[12rem]"
          aria-hidden="true"
        >
          Clients Love
        </span>

        <img
          src={portrait}
          alt="Tash, lash artist"
          className="relative z-10 h-[65vh] w-full max-w-2xl object-cover opacity-55"
        />

        {quotes.map((quote, i) => (
          <div
            key={quote.text}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`absolute z-20 w-64 border border-gunmetal/10 bg-olive p-6 text-white shadow-xl md:w-80 ${quote.position}`}
          >
            <p className="font-serif text-base italic leading-relaxed md:text-lg">
              {quote.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeartStatement