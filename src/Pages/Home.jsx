import React from 'react'
import { motion as m } from 'framer-motion'
// Components
import Hero from '../Components/Hero/Hero'
import ProjectCards from '../Components/ProjectCards/ProjectCards'
import CompanyDesc from '../Components/CompanyDesc/CompanyDesc'
// Images
import PassionateImg from '../assets/home/desktop/illustration-passionate.svg'
import ResourcefulImg from '../assets/home/desktop/illustration-resourceful.svg'
import FriendlyImg from '../assets/home/desktop/illustration-friendly.svg'

function Home() {
  return (
    <>
      <Hero />
      <div className='main'>
        <div className='design__cards__container'>
          <div className='design__card__wrapper'>
            <m.ProjectCards className={'web__design card'}>
              <h2 className='design__card__title'>Web Design</h2>
              <a href='#' className='design__card__link'>
                View Project <span className='accent__color'>&gt;</span>
              </a>
            </m.ProjectCards>

            <m.ProjectCards className={'app__design card'}>
              <h2 className='design__card__title'>App Design</h2>
              <a href='#' className='design__card__link'>
                View Project <span className='accent__color'>&gt;</span>
              </a>
            </m.ProjectCards>

            <m.ProjectCards className={'graphic__design card'}>
              <h2 className='design__card__title'>Graphic Design</h2>
              <a href='#' className='design__card__link'>
                View Project <span className='accent__color'>&gt;</span>
              </a>
            </m.ProjectCards>
          </div>

          <div className='companydesc__wrapper'>
            <m.CompanyDesc className={'company__card'}>
              <div className='card__img__container__one'>
                <img src={PassionateImg} alt='We Are Passionate' />
              </div>
              <div className='company__wrapper'>
                <h2 className='company__desc__title'>Passionate</h2>
                <p className='company__desc__text'>
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </m.CompanyDesc>

            <m.CompanyDesc className={'company__card'}>
              <div className='card__img__container__two'>
                <img src={ResourcefulImg} alt='We Are Resourceful' />
              </div>
              <div className='company__wrapper'>
                <h2 className='company__desc__title'>Resourceful</h2>
                <p className='company__desc__text'>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients' needs.
                </p>
              </div>
            </m.CompanyDesc>

            <m.CompanyDesc className={'company__card'}>
              <div className='card__img__container__three'>
                <img src={FriendlyImg} alt='We Are Friendly' />
              </div>
              <div className='company__wrapper'>
                <h2 className='company__desc__title'>Friendly</h2>
                <p className='company__desc__text'>
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </m.CompanyDesc>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
