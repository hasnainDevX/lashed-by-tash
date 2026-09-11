import React from "react";
import work1 from "../assets/image10.jpeg";
import work2 from "../assets/image11.jpg";
import work3 from "../assets/image5.jpeg";
import work4 from "../assets/image7.jpeg";
import work5 from "../assets/image8.jpeg";
import work6 from "../assets/image9.jpeg";
import work7 from "../assets/image6.jpeg";

const gallery = [
  { image: work1, span: false },
  { image: work2, span: true },
  { image: work3, span: false },
  { image: work4, span: false },
  { image: work5, span: true },
  { image: work6, span: false, hideOnMobile: true },
  { image: work7, span: false },
];

const Gallery = () => {
  return (
    <section className="w-full bg-bone px-6 py-20 px-12">
      {/* Header */}
      <div className="mx-auto max-w-5xl">
        <h2 className="mt-3 font-serif text-5xl font-extralight uppercase text-gunmetal md:text-5xl">
          A glimpse <span className="italic">of the work</span>
        </h2>
        <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-gunmetal/60 md:text-base">
          Real sets, real clients — every look mapped and applied by hand.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="mx-auto mt-12 grid max-w-5xl auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[220px] md:gap-6">
        {gallery.map((item, i) => (
          <div
            key={i}
            className={`overflow-hidden ${item.span ? "row-span-2" : "row-span-1"} ${
              item.hideOnMobile ? "hidden md:block" : ""
            }`}
          >
            <img
              src={item.image}
              alt="Lashed by Tash — client work"
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto mt-12 flex max-w-5xl justify-center">
        <a
          href="https://instagram.com/lashedby._.tash"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-gunmetal transition-colors duration-300 hover:bg-gunmetal hover:text-bone"
        >
          See more on Instagram
        </a>
      </div>
    </section>
  );
};

export default Gallery;