import React from 'react'
import { motion as m } from 'framer-motion'
import Hero from '../Components/Hero/Hero'
import DesignCards from '../Components/DesignCards/DesignCards'

function Home() {
  return (
    <>
      <Hero />
      <div className='main'>
        <div className='design__cards__container'>
          <m.DesignCards className={'web__design card'}>
            <h2 className='design__card__title'>Web Design</h2>
            <a href='#' className='design__card__link'>
              View Project <span className='accent__color'>&gt;</span>
            </a>
          </m.DesignCards>
          <m.DesignCards className={'app__design card'}>
            <h2 className='design__card__title'>Web Design</h2>
            <a href='#' className='design__card__link'>
              View Project <span className='accent__color'>&gt;</span>
            </a>
          </m.DesignCards>
          <m.DesignCards className={'graphic__design card'}>
            <h2 className='design__card__title'>Web Design</h2>
            <a href='#' className='design__card__link'>
              View Project <span className='accent__color'>&gt;</span>
            </a>
          </m.DesignCards>
        </div>
      </div>
    </>
  )
}

export default Home
