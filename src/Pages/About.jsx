import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'

// Components
import Header from '../Components/Header/Header'
import CompanyDesc from '../Components/CompanyDesc/CompanyDesc'
import AboutHero from '../Components/AboutHero/AboutHero'
import Footer from '../Components/Footer/Footer'

// Images
import CanadaImg from '../assets/shared/desktop/illustration-canada.svg'
import AustraliaImg from '../assets/shared/desktop/illustration-australia.svg'
import UnitedKingdomImg from '../assets/shared/desktop/illustration-united-kingdom.svg'

function About() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <AboutHero />
      <div className='main__about'>
        <div className='companydesc__wrapper'>
          <m.CompanyDesc className={'company__card location__card'}>
            <div className='card__img__container__three'>
              <img src={CanadaImg} alt='Canada' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title'>Canada</h2>
              <Link to='/locations'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>

          <m.CompanyDesc className={'company__card location__card'}>
            <div className='card__img__container__one'>
              <img src={AustraliaImg} alt='Australia' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title'>Australia</h2>
              <Link to='/locations#australia'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>

          <m.CompanyDesc className={'company__card location__card mb-7'}>
            <div className='card__img__container__two'>
              <img src={UnitedKingdomImg} alt='United Kingdom' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title'>United Kingdom</h2>
              <Link to='/locations'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>
        </div>
        <div className='about__hero hero__accent'>
          <div className='about__hero__container'>
            <div className='about__heroimg__wrapper real__deal__img'></div>
            <div className='about__hero__text__container_accent'>
              <div className='about__hero__text__wrapper'>
                <m.h2 className='about__hero__text__title title__accent'>
                  The real deal
                </m.h2>
                <m.p className='about__hero__text__desc desc__accent'>
                  As strategic partners in our clients' businesses, we are ready
                  to take on any challenge as our own. Solving real problems
                  require empathy and collaboration, and we strive to bring a
                  fresh perspective to every opportunity. We make design and
                  technology more accessible and give you tools to measure
                  success.
                  <br />
                  <br />
                  We are visual storytellers in appealing and captivating ways.
                  By combining business and marketing strategies, we inspire
                  audiences to take action and drive real results.
                </m.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
