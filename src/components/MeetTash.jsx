import React from "react";
import photo1 from "../assets/image2.jpeg";
import photo2 from "../assets/image3.jpeg";
import photo3 from "../assets/image4.jpeg";
import CircularText from "./CircularText";
import { Link } from "react-router-dom";

const MeetTash = () => {
  return (
    <section className="w-full bg-bone px-6 py-6 md:px-12 md:py-12 relative ">
      {/* Stacked headline */}
      <div className="mx-auto max-w-5xl mt-12">
        <h2 className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
          <span className="block text-4xl md:text-6xl">The Artist Behind</span>
          <span className="block text-4xl uppercase tracking-wide md:text-6xl">
            the Lashes
          </span>
        </h2>
      </div>

      {/* Photo grid */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="h-96 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo1}
            alt="Tash at work"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="md:block hidden h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
          <img
            src={photo2}
            alt="Tash, lash artist"
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="md:block hidden h-80 w-full overflow-hidden rounded-sm md:h-[420px]">
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
      {/* cta  */}
      <div className="flex justify-center md:bottom-24 my-10">
        <Link
          to={"/about"}
          className=" border border-gunmetal px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
        >
          Learn More About me
        </Link>
      </div>
      <CircularText
        className="md:block hidden absolute z-10 top-40 right-16 uppercase"
        color="#141C19"
      />
    </section>
  );
};

export default MeetTash;
