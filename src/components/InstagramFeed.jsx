// Live Instagram feed via Elfsight — auto-syncs with @lashedby._.tash, no manual image swapping needed.
// The platform.js loader script lives in index.html (loaded once, site-wide) — see that file.
const InstagramFeed = () => {
  return (
    <section className=" px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="elfsight-app-2525fcef-d646-4e66-9aac-0834d970d3ed" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramFeed;