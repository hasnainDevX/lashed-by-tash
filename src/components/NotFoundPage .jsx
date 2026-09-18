import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-bone px-6 text-center">
      <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
        404
      </span>
      <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-gunmetal md:text-7xl">
        Page Not <span className="italic text-olive">Found</span>
      </h1>
      <p className="mx-auto mt-5 max-w-sm font-sans text-sm leading-relaxed text-gunmetal/60">
        The page you're looking for doesn't exist — it may have been moved
        or the link might be off.
      </p>

      <Link
        to="/"
        className="mt-8 border border-olive bg-olive px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:bg-bone hover:text-olive"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFoundPage;