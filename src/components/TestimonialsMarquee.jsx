import { Link } from "react-router-dom";
import { InfiniteMovingCards, testimonialItems } from "./InfineMovingCards";
import review from "../assets/reviewelem.png";
import lashes from "../assets/lashes.png"

// Two rows of the same review data, moving in opposite directions.
const TestimonialsMarquee = () => {
  return (
    <section
      id="testimonials"
      className="bg-bone py-16 md:py-20 relative"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.055) calc(8.333% - 1px), rgba(92,107,46,0.055) 12.333%)",
      }}
    >
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center md:mb-16 ">
        <img
          src={review}
          alt="Lash extensions"
          className="absolute z-2 left-0 md:left-6 md:top-4 -top-2 md:w-32 w-20 opacity-50 -rotate-12"
        />

        <img
          src={lashes}
          alt="Lash extensions"
          className="absolute z-2 right-0 md:right-6 md:top-4 -top-2 opacity-50 md:w-32 w-20 rotate-12"
        />
        <h2 className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
          <span className="text-4xl md:text-6xl">Love </span>
          <span className="text-4xl uppercase tracking-wide md:text-6xl">
            Notes
          </span>
        </h2>
        <p className="mt-4 max-w-md  mx-auto font-sans text-sm leading-relaxed text-gunmetal/60 md:text-base">
          What clients tell me after their appointment — no incentives, just
          what they felt like typing.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <InfiniteMovingCards
          items={testimonialItems}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonialItems}
          direction="right"
          speed="normal"
        />
      </div>

      {/* cta */}
      <div className="flex justify-center mt-14 md:mt-16 relative z-2">
        <Link
          to="/booking"
          className="border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Take Me to Booking
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;