import React from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'
import heroImg from '../../assets/home/desktop/image-hero-phone.png'
function Hero() {
  return (
    <div className='desktop__padding'>
      <div className='hero'>
        <m.div className='hero__content'>
          <m.h1 className='hero__content__title'>
            Award-winning custom designs and digital branding solutions
          </m.h1>
          <m.p className='hero__content__text'>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </m.p>
          <Link to='/about'>
            <m.button className='btn btn__primary'>Learn more</m.button>
          </Link>
        </m.div>
        <m.div className='hero__img'>
          <m.img src={heroImg} alt='hero' />
        </m.div>
      </div>
    </div>
  )
}

export default Hero
