import React from 'react'
import { motion as m } from 'framer-motion'
// Components
import DesignHero from '../Components/DesignHero/DesignHero'
import DesignCard from '../Components/DesignCard/DesignCard'
// Images
import AirfilterImg from '../assets/app-design/desktop/image-airfilter.jpg'
import EyecamImg from '../assets/app-design/desktop/image-eyecam.jpg'
import FaceitImg from '../assets/app-design/desktop/image-faceit.jpg'
import TodoImg from '../assets/app-design/desktop/image-todo.jpg'
import LoopstudiosImg from '../assets/app-design/desktop/image-loopstudios.jpg'

function AppDesign() {
  return (
    <>
      <DesignHero>
        <m.h2 className='designhero__title'>App Design</m.h2>
        <m.p className='designhero__text'>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </m.p>
      </DesignHero>

      <div className='main__design'>
        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={AirfilterImg}
              alt='Airfilter App'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Airfilter</h3>
            <p className='designcard__text'>
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img src={EyecamImg} alt='EyeCam App' className='designcard__img' />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Eyecam</h3>
            <p className='designcard__text'>
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img src={FaceitImg} alt='Faceit App' className='designcard__img' />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Faceit</h3>
            <p className='designcard__text'>
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img src={TodoImg} alt='Todo App' className='designcard__img' />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Todo</h3>
            <p className='designcard__text'>
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={LoopstudiosImg}
              alt='Loopstudios App'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Loopstudios</h3>
            <p className='designcard__text'>
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </m.DesignCard>

        <m.ProjectCards className={'web__design card'}>
          <h2 className='design__card__title'>Web Design</h2>
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
    </>
  )
}

export default AppDesign
