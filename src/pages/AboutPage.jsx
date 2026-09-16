import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Statement from '../components/Statement'
import TestimonialsMarquee from '../components/TestimonialsMarquee'
import TrustStrip from '../components/TrustStrip'

const Aboutpage = () => {
  return (
    <div>
        <AboutHero/>
        <Marquee/>
        <TrustStrip/>
        <AboutIntro/>
        <Statement/>
        <TestimonialsMarquee/>
        <Footer/>
    </div>
  )
}

export default Aboutpage