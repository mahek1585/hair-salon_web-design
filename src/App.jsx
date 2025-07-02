import React from 'react'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import OpeningHours from './components/OpeningHours'
import Style from './components/Style'
import ThreeColumnLayout from './components/ThreeColumnLayout'
import TeamOne from './components/TeamOne'
import TeamTwo from './components/TeamTwo'
import TeamThree from './components/TeamThree'
import Pricing from './components/Pricing'

const App = () => {
  return (
    // <div className='text-9xl text-red-800'>App</div>
    <>
    <Hero />
    <Section2 />
    <OpeningHours />
    <Style />
    <ThreeColumnLayout />
    <TeamOne />
    <TeamTwo />
    <TeamThree />
    <Pricing />
    </>
  )
}

export default App