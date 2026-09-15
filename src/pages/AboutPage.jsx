import AboutHero from '../components/AboutHero'
import AboutIntro from '../components/AboutIntro'
import Footer from '../components/Footer'
import HeartStatement from '../components/HeartStatement'
import Marquee from '../components/Marquee'
import Statement from '../components/Statement'
import TrustStrip from '../components/TrustStrip'

const Aboutpage = () => {
  return (
    <div>
        <AboutHero/>
        <Marquee/>
        <TrustStrip/>
        <AboutIntro/>
        <HeartStatement/>
        <Statement/>
        <Footer/>
    </div>
  )
}

export default Aboutpage