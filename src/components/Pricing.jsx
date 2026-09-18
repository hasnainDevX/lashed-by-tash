import { Link } from 'react-router-dom';
import classicImg from '../assets/image6.jpeg';
import wetSetImg from '../assets/image7.jpeg';
import yyImg from '../assets/image8.jpeg';

const BOOKING_PATH = '/booking';

const TIERS = [
  {
    name: 'Classic Full Set',
    price: 90,
    fills: [
      { label: '2 Week Fill', price: 55 },
      { label: '3 Week Fill', price: 65 },
    ],
    description:
      'A timeless, natural set — one extension per natural lash for subtle definition that still looks like you, just polished.',
    includes: [
      'Full lash consultation',
      'Custom length & curl mapping',
      'Aftercare guide included',
    ],
    image: classicImg,
    ctaLabel: 'Book the Classic Set',
  },
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
    popular: true,
    ctaLabel: 'Book the Wet Set',
  },
  {
    name: 'YY Full Set',
    price: 100,
    fills: [
      { label: '2 Week Fill', price: 65 },
      { label: '3 Week Fill', price: 75 },
    ],
    description:
      'A softer alternative to volume — Y-shaped fans that add fullness without density, for a look that\u2019s fuller but still effortless.',
    includes: [
      'Full lash consultation',
      'Custom length & curl mapping',
      'Aftercare guide included',
    ],
    image: yyImg,
    ctaLabel: 'Book the YY Set',
  },
];

export default function Pricing() {
  return (
    <section className="bg-bone px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
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
                  Most Requested
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
                  <button className="w-full cursor-pointer bg-olive py-3 font-sans text-sm tracking-wide text-bone transition-colors hover:bg-olive/90">
                    {tier.ctaLabel}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

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
            <button className="cursor-pointer border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-gunmetal transition-colors duration-300 hover:bg-gunmetal hover:text-bone">
              Get My Recommendation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}