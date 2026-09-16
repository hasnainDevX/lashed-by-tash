import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCta";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import InstagramFeed from "../components/InstagramFeed";
import Marquee from "../components/Marquee";
import MeetTash from "../components/MeetTash";
import TestimonialsMarquee from "../components/TestimonialsMarquee";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <MeetTash />
      <Gallery />
      <TestimonialsMarquee/>
      <Services/>
      <BeforeAfter />
      <FAQ />
      <FinalCTA />
      <InstagramFeed />
      <Footer />
    </>
  );
}
