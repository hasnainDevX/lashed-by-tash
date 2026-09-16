import { InfiniteMovingCards, testimonialItems } from "./InfineMovingCards";

// Two rows of the same review data, moving in opposite directions.
const TestimonialsMarquee = () => {
  return (
    <section className="bg-bone py-8 md:py-16" style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.055) calc(8.333% - 1px), rgba(92,107,46,0.055) 12.333%)",
        }}>
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center md:mb-16">
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
    </section>
  );
};

export default TestimonialsMarquee;
