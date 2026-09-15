import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCta';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import HeartStatement from '../components/HeartStatement';
import Hero from '../components/Hero';
import InstagramFeed from '../components/InstagramFeed';
import Marquee from '../components/Marquee';
import MeetTash from '../components/MeetTash';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <MeetTash />
      <Gallery />
      <Services />
      <HeartStatement />
      <FAQ />
      <FinalCTA />
      <InstagramFeed/>
      <Footer/>
    </>
  );
}