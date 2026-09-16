import Pricing from '../components/Pricing';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero/>
      <Pricing />
      <Process />
      <FAQ/>
      <Footer/>
    </main>
  );
}