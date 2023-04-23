import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'

// Components
import ContactUs from '../Components/ContactUs/ContactUs'
import CompanyDesc from '../Components/CompanyDesc/CompanyDesc'

// Images
import CanadaImg from '../assets/shared/desktop/illustration-canada.svg'
import AustraliaImg from '../assets/shared/desktop/illustration-australia.svg'
import UnitedKingdomImg from '../assets/shared/desktop/illustration-united-kingdom.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import youtube from '../assets/shared/desktop/icon-youtube.svg'
import logo from '../assets/shared/desktop/logo-light.png'

function Contact() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <ContactUs />
      <div className='main__contact'>
        <div className='companydesc__wrapper'>
          <m.CompanyDesc className={'company__card'}>
            <div className='card__img__container__three'>
              <img src={CanadaImg} alt='Canada' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title text__uppercase'>Canada</h2>
              <Link to='/locations#cananda'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>

          <m.CompanyDesc className={'company__card'}>
            <div className='card__img__container__one'>
              <img src={AustraliaImg} alt='Australia' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title text__uppercase'>
                Australia
              </h2>
              <Link to='/locations#australia'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>

          <m.CompanyDesc className={'company__card'}>
            <div className='card__img__container__two'>
              <img src={UnitedKingdomImg} alt='United Kingdom' />
            </div>
            <div className='company__wrapper'>
              <h2 className='company__desc__title text__uppercase'>
                United Kingdom
              </h2>
              <Link to='/locations#uk'>
                <button className='btn btn__accent'>see location</button>
              </Link>
            </div>
          </m.CompanyDesc>
        </div>
      </div>

      <footer>
        <div className='footer__wrapper__contact'>
          <div className='footer__logo__container'>
            <div className='footer__logo__wrapper'>
              <img src={logo} alt='Designo' className='footer__logo' />
            </div>
            <div className='footer__page__links'>
              <Link to='/about' className='footer__link'>
                Our Company
              </Link>
              <Link to='/locations' className='footer__link'>
                Locations
              </Link>
              <Link to='contact' className='footer__link'>
                Contact
              </Link>
            </div>
            <div className='footer__bottom__container'>
              <div className='footer__bottom__col'>
                <p className='footer__text bold'>Designo Central Office</p>
                <p className='footer__text'>3886 Wellington Street</p>
                <p className='footer__text'>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className='footer__bottom__col'>
                <p className='footer__text bold'>Contact Us (Central Office)</p>
                <p className='footer__text'>P : +1 253-863-8967</p>
                <p className='footer__text'>M : contact@designo.co</p>
              </div>
              <div className='footer__bottom__col'>
                <a href='#' className='social__icon'>
                  <img src={facebook} alt='Facebook' />
                </a>
                <a href='#' className='social__icon'>
                  <img src={youtube} alt='Youtube' />
                </a>
                <a href='#' className='social__icon'>
                  <img src={twitter} alt='Twitter' />
                </a>
                <a href='#' className='social__icon'>
                  <img src={pinterest} alt='Pintrest' />
                </a>
                <a href='#' className='social__icon'>
                  <img src={instagram} alt='Instagram' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact
