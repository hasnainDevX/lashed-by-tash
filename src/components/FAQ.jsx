import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I know which lash style to choose?",
    answer:
      "That's what the consultation is for — we'll look at your natural lash line, eye shape, and how much upkeep you actually want, then recommend a style rather than you having to guess from a menu.",
  },
  {
    question: "How long does a full set take?",
    answer:
      "A full set takes about an hour. YY and volume sets can run slightly longer depending on the look.",
  },
  {
    question: "What happens at my first appointment?",
    answer:
      "A quick chat about the look you want, a patch test if needed, then you relax while your set is mapped and applied lash by lash — most first-timers say it feels more like a nap than a treatment.",
  },
  {
    question: "How do I make my lashes last longer?",
    answer:
      "Avoid oil-based products near your eyes, keep them dry for the first few hours, and book a fill at the 2–3 week mark before natural shedding leaves noticeable gaps.",
  },
  {
    question: "What if I need to cancel or I'm late?",
    answer:
      "Life happens — just give as much notice as you can. No-shows and late cancellations are charged 50% of the service before rebooking, which helps keep appointment slots fair for everyone.",
  },
  {
    question: "How do I pay?",
    answer: "Cash or e-transfer, whichever works best for you.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-bone/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-serif text-lg text-bone md:text-xl">
          {item.question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 font-sans text-xl text-gold transition-transform duration-500 ease-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Grid-rows trick: animates to content's natural height without measuring it in JS */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 font-sans text-sm leading-relaxed text-bone/60 md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="w-full bg-gunmetal px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
          Good to know
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-bone md:text-5xl uppercase">
          Before your first appointment
        </h2>
        <p className="mt-4 font-sans text-sm leading-relaxed text-bone/60 md:text-base">
          The questions clients ask most before booking with us for the first
          time.
        </p>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="mx-auto mt-14 max-w-3xl">
        {faqs.map((item, i) => (
          <FAQItem
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
      {/* cta  */}
      <div className="z-10 flex justify-center  my-12">
        <Link
          to={"/contact"}
          className=" border border-white px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Still Have a Question? Ask Away
        </Link>
      </div>
    </section>
  );
};

export default FAQ;