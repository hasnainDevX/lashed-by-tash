import React from 'react'

const menu = [
  {
    name: 'Classic Full Set',
    price: '$90',
    fills: [
      { label: '2 week fill', price: '$55' },
      { label: '3 week fill', price: '$65' },
    ],
  },
  {
    name: 'YY / Classic Mix',
    price: '$95',
    fills: [
      { label: '2 week fill', price: '$60' },
      { label: '3 week fill', price: '$70' },
    ],
    featured: true,
  },
  {
    name: 'YY Full Set',
    price: '$100',
    fills: [
      { label: '2 week fill', price: '$65' },
      { label: '3 week fill', price: '$75' },
    ],
  },
]

const Services = () => {
  return (
    <section className="w-full bg-gunmetal px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
          Services and Pricing
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-bone md:text-6xl">
          A lash menu, <span className="italic text-gold">made simple</span>
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {menu.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col gap-6 border px-6 py-10 text-center ${
              tier.featured
                ? 'border-gold bg-olive/10'
                : 'border-bone/15'
            }`}
          >
            <div>
              <h3 className="font-serif text-2xl text-bone">{tier.name}</h3>
              <p className="mt-2 font-serif text-4xl font-light text-gold">
                {tier.price}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-bone/15 pt-6">
              {tier.fills.map((fill) => (
                <div
                  key={fill.label}
                  className="flex items-center justify-between font-sans text-sm text-bone/80"
                >
                  <span>{fill.label}</span>
                  <span>{fill.price}</span>
                </div>
              ))}
            </div>
            <a
              href="#book"
              className="mt-auto border border-bone/40 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:bg-bone hover:text-gunmetal"
            >
              Book this set
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-md text-center font-sans text-xs text-bone/50">
        Must have 40% or more lash retention to qualify as a fill.
      </p>
    </section>
  )
}

export default Services