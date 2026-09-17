const termsSections = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By booking an appointment or using this website, you agree to the terms below. If you don't agree with any part of these terms, please contact us before booking.",
    ],
  },
  {
    heading: "Services",
    body: [
      "We offer eyelash extension services including classic, wet set, and YY sets, as described on our Services and Lash Menu pages. Descriptions and pricing are accurate at the time of publishing and are subject to change.",
    ],
  },
  {
    heading: "Booking & Appointments",
    body: [
      "Appointments can be booked through this website, by contacting us directly, or through Instagram. A confirmation will be provided once your appointment is scheduled.",
    ],
  },
  {
    heading: "Appointment Guidelines",
    body: [
      "Please arrive with clean lashes and no eye makeup.",
      "Plus-ones and double bookings for a friend are welcome — just let us know when you book.",
    ],
  },
  {
    heading: "Cancellations & No-Shows",
    body: [
      "We ask for at least 24 hours notice if you need to reschedule or cancel — this gives us a chance to fill the appointment time.",
      "Arriving more than 15 minutes late to an appointment will result in the appointment being cancelled.",
      "No-shows and late cancellations are charged a $30 fee before any future appointment can be rescheduled.",
      "Excessive lash-line buildup that requires additional cleaning before your service may incur an extra charge.",
    ],
  },
  {
    heading: "Fills",
    body: [
      "A fill requires at least 40% lash retention from your previous set. If retention is below that threshold, a full set will apply instead.",
    ],
  },
  {
    heading: "Payment",
    body: [
      "We currently accept cash or e-transfer only.",
    ],
  },
  {
    heading: "Your Health & Safety",
    body: [
      "Please let us know before your appointment about any allergies, sensitivities, or skin/eye conditions that could affect your service.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "Photos, text, and other content on this site belong to Lashed by Tash and may not be used or reproduced without permission.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "We take care in providing our services, but we are not liable for indirect or incidental damages arising from use of this website or our services, to the extent permitted by law.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These terms are governed by the laws of Manitoba, Canada.",
    ],
  },
];

const websitePolicySections = [
  {
    heading: "Website Use",
    body: [
      "This website is provided for general information, appointment bookings, and communication with Lashed by Tash. Please use the website lawfully and respectfully.",
    ],
  },
  {
    heading: "Website Content",
    body: [
      "We make reasonable efforts to keep our website information accurate and up to date, but services, availability, pricing, and other details may change without notice.",
    ],
  },
  {
    heading: "Bookings",
    body: [
      "Submitting a booking request does not guarantee an appointment. An appointment is confirmed only once we have accepted and confirmed your request.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "Our website may contain links to third-party websites or services. We are not responsible for their content, availability, or privacy practices.",
    ],
  },
  {
    heading: "Website Availability",
    body: [
      "We do not guarantee that the website will always be available, error-free, or uninterrupted.",
    ],
  },
];

const Section = ({ heading, body }) => (
  <div className="mb-10">
    <h3 className="font-serif text-2xl font-light tracking-wide text-gunmetal md:text-3xl">
      {heading}
    </h3>

    <div className="mt-3 space-y-3 font-sans text-sm leading-relaxed text-gunmetal/70 md:text-base">
      {body.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  </div>
);

const PolicyContent = () => {
  return (
    <section className="w-full bg-bone px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-3xl">

        {/* Terms of Service */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-light uppercase tracking-wide text-gunmetal md:text-4xl">
            Terms of Service
          </h2>

          <div className="mt-4 h-px w-12 bg-gold" />
        </div>

        {termsSections.map((section) => (
          <Section
            key={section.heading}
            {...section}
          />
        ))}

        {/* Divider */}
        <div className="my-20 h-px w-full bg-gunmetal/15" />

        {/* Website Use Policy */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-light uppercase tracking-wide text-gunmetal md:text-4xl">
            Website Use Policy
          </h2>

          <div className="mt-4 h-px w-12 bg-gold" />
        </div>

        {websitePolicySections.map((section) => (
          <Section
            key={section.heading}
            {...section}
          />
        ))}

        {/* Contact */}
        <div className="mt-16 border-t border-gunmetal/15 pt-8">
          <p className="font-sans text-sm leading-relaxed text-gunmetal/70">
            Questions about these terms or this policy? Contact us at{" "}
            <a
              href="mailto:lashedbytash21@gmail.com"
              className="text-olive underline underline-offset-4"
            >
              lashedbytash21@gmail.com
            </a>
            .
          </p>
        </div>

      </div>
    </section>
  );
};

export default PolicyContent;
