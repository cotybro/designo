import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'
// Components
import DesignHero from '../Components/DesignHero/DesignHero'
import DesignCard from '../Components/DesignCard/DesignCard'
import ProjectCards from '../Components/ProjectCards/ProjectCards'
// Images
import ExpressImg from '../assets/web-design/desktop/image-express.jpg'
import TransferImg from '../assets/web-design/desktop/image-transfer.jpg'
import PhotonImg from '../assets/web-design/desktop/image-photon.jpg'
import BuilderImg from '../assets/web-design/desktop/image-builder.jpg'
import BlogrImg from '../assets/web-design/desktop/image-blogr.jpg'
import CampImg from '../assets/web-design/desktop/image-camp.jpg'

function WebDesign() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <DesignHero>
        <m.h2 className='designhero__title'>Web Design</m.h2>
        <m.p className='designhero__text'>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </m.p>
      </DesignHero>

      <div className='main__design'>
        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={ExpressImg}
              alt='Express Website'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Express</h3>
            <p className='designcard__text'>
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={TransferImg}
              alt='Transfer Website'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Transfer</h3>
            <p className='designcard__text'>
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={PhotonImg}
              alt='Photon Website'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Photon</h3>
            <p className='designcard__text'>
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={BuilderImg}
              alt='Builder Website'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Builder</h3>
            <p className='designcard__text'>
              Connects users with local contractors based on their location
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={BlogrImg}
              alt='Blogr Website'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Express</h3>
            <p className='designcard__text'>
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </m.DesignCard>

        <m.ProjectCards className={'app__design card'}>
          <h2 className='design__card__title'>App Design</h2>
          <Link to='/app-design' className='design__card__link'>
            View Project <span className='accent__color'>&gt;</span>
          </Link>
        </m.ProjectCards>

        <m.ProjectCards className={'graphic__design card'}>
          <h2 className='design__card__title'>Graphic Design</h2>
          <Link to='/graphic-design' className='design__card__link'>
            View Project <span className='accent__color'>&gt;</span>
          </Link>
        </m.ProjectCards>
      </div>
    </>
  )
}

export default WebDesign
