import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { motion as m } from 'framer-motion'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import logo from '../../assets/shared/desktop/logo-light.png'
function Footer() {
  return (
    <footer>
      <GetInTouch />
      <div className='footer__wrapper desktop__padding'>
        <div className='footer__logo__container'>
          <div className='footer__top__container'>
            <div className='footer__logo__wrapper'>
              <Link to='/'>
                <img src={logo} alt='Designo' className='footer__logo' />
              </Link>
            </div>
            <div className='footer__page__links'>
              <Link to='/about' className='footer__link'>
                Our Company
              </Link>
              <Link to='/locations' className='footer__link'>
                Locations
              </Link>
              <Link to='/contact' className='footer__link'>
                Contact
              </Link>
            </div>
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
  )
}

export default Footer
