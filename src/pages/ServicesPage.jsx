import Pricing from '../components/Pricing';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import Process from '../components/Process';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero/>
      <Pricing />
      <Process />
      <Footer/>
    </main>
  );
}