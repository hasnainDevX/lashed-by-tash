import React from 'react'

const items = [
  '400+ CLIENTS TRUSTED',
  'AWARD-NOMINATED ARTIST',
  'STEINBACH, MB',
  'CERTIFIED LASH ARTIST',
]

const Marquee = () => {
  // repeated 3x so the loop feels continuous with no visible gap or restart jump
  const repeated = [...items, ...items, ...items]

  return (
    <section className="w-full overflow-hidden bg-olive py-4">
      <div className="flex w-max animate-marquee gap-8">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-sans text-sm font-medium uppercase tracking-[0.2em] text-bone">
              {item}
            </span>
            <span className="text-gold">•</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee