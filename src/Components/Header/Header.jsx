import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Header.css'
import logoDark from '../../../src/assets/shared/desktop/logo-dark.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='desktop__padding'>
      <m.header>
        <Link to='/' className='header__logo__link'>
          <img src={logoDark} alt='DESIGNO' className='header__logo' />
        </Link>

        <m.button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? 'menu__open' : 'menu__close' + ' header__menu'}
        ></m.button>

        <ul className='header__nav__desktop'>
          <li className='header__nav__item'>
            <Link to='/about' className='header__nav__link'>
              Our Company
            </Link>
          </li>

          <li className='header__nav__item'>
            <Link to='/locations' className='header__nav__link'>
              Locations
            </Link>
          </li>

          <li className='header__nav__item'>
            <Link to='/contact' className='header__nav__link'>
              Contact
            </Link>
          </li>
        </ul>
      </m.header>
      {isOpen && (
        <>
          <nav>
            <ul className='header__nav'>
              <li className='header__nav__item'>
                <Link
                  to='/about'
                  className='header__nav__link'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Our Company
                </Link>
              </li>
              <li className='header__nav__item'>
                <Link
                  to='/locations'
                  className='header__nav__link'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Locations
                </Link>
              </li>
              <li className='header__nav__item'>
                <Link
                  to='/contact'
                  className='header__nav__link'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}

export default Header
