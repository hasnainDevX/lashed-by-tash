import { useState } from "react";

const InstagramIcon = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Same as BookingInquiry — no backend wired yet, just local state.
    setSubmitted(true);
  };

  return (
    <section className="bg-bone px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
          <h2 className="font-serif font-light leading-[1.05] text-gunmetal uppercase">
            <span className="text-4xl md:text-6xl">Just a </span>
            <span className="text-4xl uppercase tracking-wide md:text-6xl">
              Question
            </span>
          </h2>
          <div className="mx-auto mt-12 max-w-2xl">
            <p className="font-sans text-base leading-relaxed text-gunmetal/60 md:text-lg">
              Have a question about lash extensions, your appointment, or
              finding the right set for you? Send a message and I’ll get back to
              you as soon as I can.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border border-gunmetal/30 md:grid-cols-5">
          {/* Form column */}
          <div className="bg-bone px-6 py-10 md:col-span-3 md:px-12 md:py-14">
            {submitted ? (
              <div className="border border-olive/30 bg-olive/5 px-6 py-10 text-center">
                <p className="font-serif text-lg font-light text-gunmetal">
                  Got it — thanks for reaching out.
                </p>
                <p className="mt-1 font-sans text-sm text-gunmetal/60">
                  I'll reply as soon as I can.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/50"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-gunmetal/20 bg-transparent py-2 font-sans text-sm text-gunmetal outline-none transition-colors focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/50"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-gunmetal/20 bg-transparent py-2 font-sans text-sm text-gunmetal outline-none transition-colors focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full border border-gunmetal/20 bg-transparent px-3 py-2 font-sans text-sm text-gunmetal outline-none transition-colors focus:border-olive"
                  />
                </div>

                <button
                  type="submit"
                  className="border border-olive bg-olive px-10 py-3 font-sans text-sm uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:bg-bone hover:text-olive"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Availability / info column */}
          <div
            className="bg-bone px-6 py-10 md:col-span-2 md:px-10 md:py-14 border-l border-gunmetal/30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(120deg, transparent 0, transparent calc(8.333% - 1px), rgba(92,107,46,0.015) calc(8.333% - 1px), rgba(92,107,46,0.015) 14.333%)",
            }}
          >
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
              Availability
            </p>
            <p className="mt-3 font-serif text-2xl text-gunmetal md:text-3xl uppercase">
              By appointment only
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-gunmetal/60">
              Openings are posted regularly on Instagram — follow along or send
              a message here and I'll find a time that works.
            </p>

            <div className="mt-8 space-y-6 border-t border-gunmetal/20 pt-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/40">
                  Location
                </p>
                <p className="mt-1 font-sans text-sm text-gunmetal">
                  Steinbach, MB
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/40">
                  Payment
                </p>
                <p className="mt-1 font-sans text-sm text-gunmetal">
                  Cash &amp; e-transfer accepted
                </p>
              </div>

              <div>
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-gunmetal/40">
                  Follow Along
                </p>
                <a
                  href="https://instagram.com/lashedby._.tash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 font-sans text-sm text-gunmetal/80 transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @lashedby._.tash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
