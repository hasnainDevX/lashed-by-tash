import React from 'react'
import classicImg from '../assets/image6.jpeg'
import yyMixImg from '../assets/image7.jpeg'
import yyFullImg from '../assets/image8.jpeg'

const services = [
  {
    name: 'Classic Full Set',
    price: '$90',
    image: classicImg,
    description:
      'One premium extension per natural lash for elegant length and a soft, everyday finish.',
  },
  {
    name: 'YY / Classic Mix',
    price: '$95',
    image: yyMixImg,
    description:
      'A textured blend of YY and classic fans for extra fullness without heavy volume.',
  },
  {
    name: 'YY Full Set',
    price: '$100',
    image: yyFullImg,
    description:
      'Full YY lashes from root to tip for a fluffy, dramatic look that still feels light.',
  },
]

const Services = () => {
  return (
    <section className="w-full bg-gunmetal px-6 py-20 md:px-12 md:py-28">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-light text-bone md:text-5xl uppercase">
          Our lash services
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-bone/60 md:text-base">
          Every set starts with a quick consultation, so the result actually
          suits your eye shape and how much upkeep you want.
        </p>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.name} className="flex flex-col">
            <div className="h-64 w-full overflow-hidden rounded-md">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl text-bone uppercase">{service.name}</h3>
              <span className="font-sans text-sm text-bone/60">
                From <span className="font-medium text-gold">{service.price}</span>
              </span>
            </div>

            <p className="mt-2 font-sans text-sm leading-relaxed text-bone/50">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto mt-14 flex max-w-5xl justify-center">
        <a
          href="services"
          className="bg-gold px-8 py-3 font-sans text-sm font-medium uppercase tracking-[0.15em] text-gunmetal transition-opacity duration-300 hover:opacity-80"
        >
          View full service menu
        </a>
      </div>
    </section>
  )
}

export default Services