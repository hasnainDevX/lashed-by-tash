import React from "react";
import photo1 from "../assets/image2.jpeg";
import photo2 from "../assets/image3.jpeg";
import photo3 from "../assets/image4.jpeg";

const MeetTash = () => {
  return (
    <section className="w-full bg-bone px-6 py-20 md:px-12 md:py-28">
      {/* Stacked headline */}
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif font-light leading-[1.05] text-gunmetal">
          <span className="block text-4xl md:text-6xl">The Artist Behind</span>
          <span className="block text-4xl uppercase tracking-wide md:text-6xl">
            the Lashes
          </span>
        </h2>
      </div>

      {/* Photo grid */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo1}
            alt="Tash at work"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo2}
            alt="Tash, lash artist"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo3}
            alt="Lash artistry detail"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
      </div>

      {/* Intro paragraph below the grid */}
      <div className="mx-auto mt-12 max-w-2xl">
        <p className="font-sans text-base leading-relaxed text-gunmetal/80 md:text-lg">
          Award-nominated and trusted by 400+ clients in Steinbach, MB — Tash
          built her craft around one idea: lashes that give you your mornings
          back, without ever feeling high-maintenance.
        </p>
      </div>
    </section>
  );
};

export default MeetTash;
