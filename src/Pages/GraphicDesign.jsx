import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'
// Components
import DesignHero from '../Components/DesignHero/DesignHero'
import DesignCard from '../Components/DesignCard/DesignCard'
import Footer from '../Components/Footer/Footer'

// Images
import ChangeImg from '../assets/graphic-design/desktop/image-change.jpg'
import BoxedWaterImg from '../assets/graphic-design/desktop/image-boxed-water.jpg'
import ScienceImg from '../assets/graphic-design/desktop/image-science.jpg'

function GraphicDesign() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <DesignHero>
        <m.h2 className='designhero__title'>Graphic Design</m.h2>
        <m.p className='designhero__text'>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </m.p>
      </DesignHero>
      <div className='main__design'>
        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={ChangeImg}
              alt='Change By Design'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Tim Brown</h3>
            <p className='designcard__text'>
              A book cover designed for Tim Brown's new release, 'Change'
            </p>
          </div>
        </m.DesignCard>

        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img
              src={BoxedWaterImg}
              alt='Boxed Water'
              className='designcard__img'
            />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Boxed Water</h3>
            <p className='designcard__text'>
              A simple packaging concept made for Boxed Water
            </p>
          </div>
        </m.DesignCard>
        <m.DesignCard className={'designcard'}>
          <div className='designcard__img__wrapper'>
            <img src={ScienceImg} alt='Science' className='designcard__img' />
          </div>
          <div className='designcard__info__wrapper'>
            <h3 className='designcard__title'>Science!</h3>
            <p className='designcard__text'>
              A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </m.DesignCard>

        <Link to='/app-design'>
          <m.ProjectCards className={'app__design card'}>
            <h2 className='design__card__title'>App Design</h2>
            <p className='design__card__link'>
              View Project <span className='accent__color'>&gt;</span>
            </p>
          </m.ProjectCards>
        </Link>

        <Link to='/web-design'>
          <m.ProjectCards className={'web__design card'}>
            <h2 className='design__card__title'>Web Design</h2>
            <p className='design__card__link'>
              View Project <span className='accent__color'>&gt;</span>
            </p>
          </m.ProjectCards>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default GraphicDesign
