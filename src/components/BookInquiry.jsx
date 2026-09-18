import { useState } from "react";
import heroVideo from "../assets/work3.mp4";

const serviceOptions = [
  "Classic",
  "Wet Set",
  "YY Full Set",
  "Fill / Touch-Up",
  "Not Sure Yet",
];

const BookingInquiry = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gunmetal/50" />

      <div id="inquire" className="relative flex justify-center px-4 py-20 md:py-28">
        <div className="w-full max-w-2xl bg-bone px-6 py-12 shadow-2xl md:px-16 md:py-16">
          <div className="text-center">
            <p className="font-serif text-lg italic tracking-wide text-olive md:text-xl">
              Let's give you lashes worth
            </p>
            <h1 className="mt-1 font-serif text-4xl font-light uppercase tracking-wide text-gunmetal md:text-6xl">
              Waking Up To
            </h1>
            <div className="mx-auto mt-5 h-px w-12 bg-gold" />

            <p className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-gunmetal/70">
              A quick consultation-first process, so your set actually fits
              your eye shape and how much upkeep you want.
            </p>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-gunmetal/70">
              Fill out the form below and I'll get back to you to confirm a
              time. Most appointments run about an hour.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 border border-olive/30 bg-olive/5 px-6 py-8 text-center">
              <p className="font-serif text-xl font-light text-gunmetal">
                Thank you — your inquiry is in.
              </p>
              <p className="mt-2 font-sans text-sm text-gunmetal/60">
                I'll be in touch soon to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <FieldInput label="First Name" required id="firstName" />
                <FieldInput label="Last Name" required id="lastName" />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <FieldInput label="Email" type="email" required id="email" />
                <FieldInput label="Phone Number" type="tel" required id="phone" />
              </div>

              <div>
                <p className="font-sans text-sm text-gunmetal">
                  Service Interested In <span className="text-olive">*</span>
                </p>
                <div className="mt-3 space-y-2">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-2 font-sans text-sm text-gunmetal/80"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                        className="h-4 w-4 accent-olive"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <FieldInput label="Preferred Date" type="date" id="date" />

              <FieldSelect
                label="Preferred Time"
                id="time"
                options={["Morning", "Afternoon", "Evening"]}
              />

              <FieldSelect
                label="How did you hear about me?"
                id="referral"
                required
                options={["Instagram", "Referral from a friend", "Google", "Other"]}
              />

              <FieldTextarea
                label="Tell me about your dream lash look"
                id="vision"
                placeholder="Natural, dramatic, somewhere in between — whatever you're picturing."
              />

              <button
                type="submit"
                className="w-full border border-olive bg-olive py-4 font-sans text-sm uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:bg-bone hover:text-olive"
              >
                Send Inquiry
              </button>

              <p className="text-center font-sans text-xs leading-relaxed text-gunmetal/40">
                Cash and e-transfer accepted. No-shows and late cancellations
                are charged a $30 fee before rescheduling.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FieldInput = ({ label, id, type = "text", required = false }) => (
  <div>
    <label htmlFor={id} className="font-sans text-sm text-gunmetal">
      {label} {required && <span className="text-olive">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      className="mt-2 w-full border-b border-gunmetal/20 bg-transparent py-2 font-sans text-sm text-gunmetal outline-none transition-colors focus:border-olive"
    />
  </div>
);

const FieldSelect = ({ label, id, options, required = false }) => (
  <div>
    <label htmlFor={id} className="font-sans text-sm text-gunmetal">
      {label} {required && <span className="text-olive">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      defaultValue=""
      className="mt-2 w-full border-b border-gunmetal/20 bg-transparent py-2 font-sans text-sm text-gunmetal/60 outline-none transition-colors focus:border-olive"
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const FieldTextarea = ({ label, id, placeholder }) => (
  <div>
    <label htmlFor={id} className="font-sans text-sm text-gunmetal">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      rows={3}
      placeholder={placeholder}
      className="mt-2 w-full border border-gunmetal/20 bg-transparent px-3 py-2 font-sans text-sm text-gunmetal outline-none transition-colors placeholder:text-gunmetal/30 focus:border-olive"
    />
  </div>
);

export default BookingInquiry;