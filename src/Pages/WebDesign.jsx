import React from 'react'
import { motion as m } from 'framer-motion'
import DesignHero from '../Components/DesignHero/DesignHero'
import DesignCard from '../Components/DesignCard/DesignCard'
function WebDesign() {
  return (
    <>
      <DesignHero>
        <m.h2 className='designhero__title'>Web Design</m.h2>
        <m.p className='designhero__text'>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </m.p>
      </DesignHero>
      <DesignCard></DesignCard>
      <div className='main'></div>
    </>
  )
}

export default WebDesign
