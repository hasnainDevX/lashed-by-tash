import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import MeetTash from '../components/MeetTash';
import HeartStatement from '../components/HeartStatement';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <MeetTash />
      <Gallery />
      <Services />
      <HeartStatement />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}