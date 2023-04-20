import React from 'react'
import './AboutHero.css'
import { motion as m } from 'framer-motion'

import AboutImg from '../../assets/about/mobile/image-about-hero.jpg'
import WorldClassTalentImg from '../../assets/about/mobile/image-world-class-talent.jpg'
function AboutHero() {
  return (
    <>
      <div className='about__hero hero__primary'>
        <div className='about__hero__container'>
          <div className='about__heroimg__wrapper'>
            <img
              src={AboutImg}
              alt='Group of workers collaborating around a table'
              className='about__heroimg'
            />
          </div>
          <div className='about__hero__text__container'>
            <div className='about__hero__text__wrapper'>
              <m.h2 className='about__hero__text__title'>About Us</m.h2>
              <m.p className='about__hero__text__desc'>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We've partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We're always looking forward to creating brands,
                products, and digital experiences that connect with our clients'
                audiences.
              </m.p>
            </div>
          </div>
        </div>
      </div>
      <div className='about__hero hero__accent'>
        <div className='about__hero__container'>
          <div className='about__heroimg__wrapper'>
            <img
              src={WorldClassTalentImg}
              alt='A women standing in front of a vision board'
              className='about__heroimg'
            />
          </div>
          <div className='about__hero__text__container'>
            <div className='about__hero__text__wrapper'>
              <m.h2 className='about__hero__text__title title__accent'>
                World-class talent
              </m.h2>
              <m.p className='about__hero__text__desc desc__accent'>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
                <br />
                <br />
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand's story and mission.
              </m.p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHero
