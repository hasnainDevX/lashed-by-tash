import { ArrowUpRight, Inspect } from "lucide-react";
import logo from "../assets/tlogo.png";
import lashesIcon from "../assets/lashes.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Lash Menu", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Connect Mailchimp / Formspree / Kit here later.
  };

  return (
    <footer className="relative overflow-hidden bg-bone text-gunmetal">
      {/* Very subtle feminine line background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.055) calc(8.333% - 1px), rgba(92,107,46,0.055) 8.333%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 md:px-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr_0.8fr_1.15fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="/home" aria-label="Lashed by Tash home" className="flex justify-center md:justify-start">
              <img src={logo} alt="Lashed by Tash" className="h-auto w-64" />
            </a>

            <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-gunmetal/60">
              Lash extensions in Steinbach, Manitoba.
            </p>

            <a
              href="https://www.instagram.com/lashedby._.tash/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-gunmetal/70 transition-colors hover:text-olive"
            >
              <Inspect className="h-4 w-4 stroke-[1.5]" />
              @lashedby._.tash
            </a>
          </div>

          {/* Links */}
          <nav>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#A88B3F]">
              Explore
            </p>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-gunmetal/65 transition-colors hover:text-olive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio */}
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#A88B3F]">
              Studio Info
            </p>

            <div className="mt-5 space-y-3 font-sans text-sm leading-6 text-gunmetal/65">
              <p>
                Steinbach, MB
                <br />
                By appointment only
              </p>

              <p>
                Cash &amp; e-transfer
                <br />
                accepted
              </p>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-olive transition-colors hover:text-[#A88B3F]"
              >
                Book an appointment
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-olive/[0.08] p-6 sm:p-7">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#A88B3F]">
              Newsletter
            </p>

            <h3 className="mt-3 font-sans text-lg font-medium tracking-[-0.02em]">
              Stay in the loop.
            </h3>

            <p className="mt-2 font-sans text-sm leading-6 text-gunmetal/60">
              Appointment openings, lash tips, and occasional updates.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                required
                placeholder="Email address"
                className="h-12 w-full border border-olive/20 bg-bone px-4 font-sans text-sm outline-none transition-colors placeholder:text-gunmetal/40 focus:border-olive"
              />

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center bg-olive font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-bone transition-colors hover:bg-gunmetal"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="h-20 w-full opacity-40 mt-12"
          style={{
            backgroundImage: `url(${lashesIcon})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
          }}
        />

        <div className="flex flex-col gap-3  border-olive/15 pt-6 font-sans text-[10px] uppercase tracking-[0.12em] text-gunmetal/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lashed by Tash</p>
          <p>Certified Lash Artist · Steinbach, MB</p>
          <a href="#policies" className="hover:text-olive">
            Policies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
