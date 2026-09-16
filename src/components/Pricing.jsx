import { Link } from 'react-router-dom';
import wetSetImg from '../assets/image6.jpeg';
import hybridImg from '../assets/image7.jpeg';
import volumeImg from '../assets/image8.jpeg';

// (e.g. an external Calendly link, or an in-page anchor like "/#booking").
const BOOKING_PATH = '/book';

const TIERS = [
  {
    name: 'Wet Set',
    price: 100,
    fills: [
      { label: '2 Week Fill', price: 65 },
      { label: '3 Week Fill', price: 75 },
    ],
    description:
      'A soft, low-maintenance set built for a natural everyday finish — barely-there weight, full commitment to the effortless look.',
    includes: [
      'Full lash consultation',
      'Custom length & curl mapping',
      'Aftercare guide included',
    ],
    image: wetSetImg,
    ctaLabel: 'Book the Wet Set',
  },
  {
    name: 'Hybrid Full Set',
    price: 110,
    fills: [
      { label: '2 Week Fill', price: 75 },
      { label: '3 Week Fill', price: 85 },
    ],
    description:
      'A textured mix of classic and volume fans for added depth and dimension — fuller than a wet set, without going full volume.',
    includes: [
      'Full lash consultation',
      'Custom length & curl mapping',
      'Aftercare guide included',
    ],
    image: hybridImg,
    popular: true,
    ctaLabel: 'Book the Hybrid Set',
  },
  {
    name: 'Volume Full Set',
    price: 115,
    fills: [
      { label: '2 Week Fill', price: 80 },
      { label: '3 Week Fill', price: 90 },
    ],
    description:
      'Handmade volume fans built lash-by-lash for maximum density and a bold, dramatic finish that still feels weightless.',
    includes: [
      'Full lash consultation',
      'Custom length & curl mapping',
      'Aftercare guide included',
    ],
    image: volumeImg,
    ctaLabel: 'Book the Volume Set',
  },
];

export default function Pricing() {
  return (
    <section className="bg-bone px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 flex items-center justify-center gap-6 text-center md:mb-20">
          <span className="h-px flex-1 bg-gunmetal/20" />
          <h2 className="font-serif text-4xl font-light tracking-wide text-gunmetal md:text-6xl uppercase">
            Lash Menu
          </h2>
          <span className="h-px flex-1 bg-gunmetal/20" />
        </div>

        <p className="mx-auto mb-16 max-w-xl text-center font-sans text-base text-gunmetal/70 md:mb-24">
          Every set is applied lash-by-lash and tailored to your natural
          lash line. Fills require 40% or more retention to qualify.
        </p>

        {/* Tier cards */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col border ${
                tier.popular ? 'border-olive' : 'border-gunmetal/15'
              } bg-bone`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive px-4 py-1 font-sans text-xs tracking-wide text-bone">
                  Most Popular
                </span>
              )}

              <div className="aspect-[4/3] w-full overflow-hidden bg-gunmetal/5">
                <img
                  src={tier.image}
                  alt={tier.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-2xl font-light tracking-wide text-gunmetal">
                  {tier.name}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gunmetal/70">
                  {tier.description}
                </p>

                <span className="my-6 block h-px w-full bg-gunmetal/15" />

                <ul className="mb-6 space-y-2 font-sans text-sm text-gunmetal/80">
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <span className="mb-6 block h-px w-full bg-gunmetal/15" />

                <div className="mt-auto space-y-1 font-sans text-sm text-gunmetal">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-3xl font-light text-gunmetal">
                      ${tier.price}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-gunmetal/50">
                      Full Set
                    </span>
                  </div>
                  {tier.fills.map((fill) => (
                    <div
                      key={fill.label}
                      className="flex items-baseline justify-between text-gunmetal/60"
                    >
                      <span>{fill.label}</span>
                      <span>${fill.price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={BOOKING_PATH}
                  state={{ selectedSet: tier.name }}
                  className="mt-8"
                >
                  <button className="w-full bg-olive py-3 font-sans text-sm tracking-wide text-bone transition-colors hover:bg-olive/90">
                    {tier.ctaLabel}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhancements strip */}
        <div className="mt-24 flex flex-col items-center justify-center gap-6 text-center md:mt-32">
          <h3 className="font-serif text-2xl font-light tracking-wide text-gunmetal md:text-3xl">
            Still Unsure Which Set Is Right?
          </h3>
          <p className="font-sans text-sm text-gunmetal/70 max-w-sm">
            Fill out the contact form and I will get back to you with a personalized recommendation.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/contact">
            <button className="border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-gunmetal transition-colors duration-300 hover:bg-gunmetal hover:text-bone">
              Get My Recommendation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}