import React from "react";
import { Link } from "react-router-dom";
import classicImg from "../assets/image6.jpeg";
import wetSetImg from "../assets/image7.jpeg";
import yyImg from "../assets/image8.jpeg";

const services = [
  {
    name: "Classic",
    price: "$90",
    image: classicImg,
    description:
      "A timeless, natural set — one extension per natural lash for subtle definition that still looks like you, just polished.",
  },
  {
    name: "Wet Set",
    price: "$100",
    image: wetSetImg,
    description:
      "A soft, low-maintenance set built for a natural everyday finish — barely-there weight, full commitment to the effortless look.",
  },
  {
    name: "YY Full Set",
    price: "$100",
    image: yyImg,
    description:
      "A softer alternative to volume — Y-shaped fans that add fullness without density, for a look that's fuller but still effortless.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-gunmetal px-6 py-16 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-light uppercase text-bone md:text-5xl">
          Our lash services
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-bone/60 md:text-base">
          Every set starts with a quick consultation, so the result actually
          suits your eye shape and how much upkeep you want.
        </p>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {services.map((service, i) => (
          <div
            key={service.name}
            className={`group relative flex flex-col overflow-hidden rounded-lg border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              service.featured
                ? "border-gold bg-olive/10"
                : "border-bone/10 bg-bone/[0.03]"
            }`}
          >
            {service.featured && (
              <span className="absolute right-4 top-4 z-3 bg-gold px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-gunmetal">
                Most Popular
              </span>
            )}

            <div className="h-52 w-full overflow-hidden rounded-md md:h-64">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-xl uppercase text-bone">
                {service.name}
              </h3>
              <span className="font-sans text-sm text-bone/60">
                From{" "}
                <span className="font-medium text-gold">{service.price}</span>
              </span>
            </div>

            <p className="mt-2 font-sans text-sm leading-relaxed text-bone/50">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl justify-center md:mt-14">
        <Link
          to="/services"
          className="border border-bone/40 bg-olive px-8 py-3 font-sans text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-olive"
        >
          See What Each Set Includes
        </Link>
      </div>
    </section>
  );
};

export default Services;