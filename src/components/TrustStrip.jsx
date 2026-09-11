import React from 'react'

const stats = [
  { value: '400+', label: 'Clients trusted' },
  { value: 'Nominated', label: 'Award-nominated artist' },
  { value: 'Certified', label: 'Lash artist' },
  { value: 'Steinbach, MB', label: 'Studio location' },
]

const TrustStrip = () => {
  return (
    <section className="w-full bg-gunmetal mb-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-bone/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1 px-6 py-10 text-center"
          >
            <span className="font-serif text-3xl font-italic text-white md:text-4xl">
              {stat.value}
            </span>
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-bone/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustStrip