import React from 'react'
import AboutHero from '../components/AboutHero'
import Marquee from '../components/Marquee'
import TrustStrip from '../components/TrustStrip'
import HeartStatement from '../components/HeartStatement'
import Statement from '../components/Statement'
import MeetTash from '../components/MeetTash'
import AboutIntro from '../components/AboutIntro'

const Aboutpage = () => {
  return (
    <div>
        <AboutHero/>
        <Marquee/>
        <TrustStrip/>
        <AboutIntro/>
        <HeartStatement/>
        <Statement/>
    </div>
  )
}

export default Aboutpage