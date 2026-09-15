import { Link } from "react-router-dom";
import bgImage from "../assets/image8.jpeg";
import logo from "../assets/tlogo2.png";
import CircularText from "./CircularText";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Book", to: "/book" },
];

const ServicesHero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gunmetal">
      {/* Background photo — same treatment as AboutHero's original photo version */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gunmetal/70" />

      {/* Nav — identical to Hero.jsx / AboutHero.jsx so it's consistent across routes */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link to="/">
          <img
            src={logo}
            alt="Lashed by Tash"
            className="h-12 w-auto scale-200"
          />
        </Link>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-sans text-sm uppercase tracking-[0.2em] text-bone hover:underline underline-offset-8"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <MobileNav />
      </nav>

      {/* Page title — same outlined-serif treatment as the homepage wordmark */}
      <div className="relative z-2 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-gold">
          Services
        </span>
        <h1
          className="flex items-baseline gap-3 whitespace-nowrap font-serif font-light uppercase leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px #FAF9F5",
            fontSize: "clamp(2rem, 9vw, 5.5rem)",
          }}
        >
          <span>The</span>
          <span
            className="font-serif italic normal-case text-bone"
            style={{ WebkitTextStroke: "0px", fontSize: "0.6em" }}
          >
            lash
          </span>
          <span>Menu</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-xs uppercase tracking-[0.2em] text-bone/80">
          Classic, hybrid, and volume sets — built around your natural lash line
        </p>

        <div className="z-2 flex justify-center my-6">
          <Link
            to="/book"
            className="border border-white px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-olive hover:bg-white hover:text-olive"
          >
            Book Now
          </Link>
        </div>
      </div>

      <CircularText className="absolute bottom-14 right-4 z-2 md:bottom-0 md:top-auto" />
    </section>
  );
};

export default ServicesHero;