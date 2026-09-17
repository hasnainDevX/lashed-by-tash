import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wetSetImg from "../assets/image6.jpeg";
import hybridImg from "../assets/image7.jpeg";
import volumeImg from "../assets/image8.jpeg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Wet Set",
    price: "$100",
    image: wetSetImg,
    description:
      "A soft, low-maintenance set built for a natural everyday finish — barely-there weight, full commitment to the effortless look.",
  },
  {
    name: "Hybrid Full Set",
    price: "$110",
    image: hybridImg,
    description:
      "A textured mix of classic and volume fans for added depth and dimension, without going full volume.",
    featured: true,
  },
  {
    name: "Volume Full Set",
    price: "$115",
    image: volumeImg,
    description:
      "Handmade volume fans built lash-by-lash for maximum density and a bold, dramatic finish that still feels weightless.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // NOTE: gsap/ScrollTrigger are imported and registered above but nothing
  // currently animates cardRefs/sectionRef — this effect is a placeholder.
  // Wire up your actual scroll-reveal here, or remove the gsap import and
  // refs above if this section isn't animated anymore.
  useEffect(() => {
    // e.g. gsap.from(cardRefs.current, { ... scrollTrigger: { trigger: sectionRef.current } })
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full bg-gunmetal px-6 py-16 md:px-12 md:py-28"
    >
      {/* Header */}
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

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {services.map((service, i) => (
          <div
            key={service.name}
            ref={(el) => (cardRefs.current[i] = el)}
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

      {/* CTA */}
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