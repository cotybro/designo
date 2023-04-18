import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import './Header.css'
import logoDark from '../../../src/assets/shared/desktop/logo-dark.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <m.header>
        <img src={logoDark} alt='DESIGNO' className='header__logo' />

        <m.button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? 'menu__open' : 'menu__close'}
        ></m.button>
      </m.header>
      {isOpen && (
        <>
          <nav>
            <ul className='header__nav'>
              <li className='header__nav__item'>
                <a href='#' className='header__nav__link'>
                  Our company
                </a>
              </li>
              <li className='header__nav__item'>
                <a href='#' className='header__nav__link'>
                  Locations
                </a>
              </li>
              <li className='header__nav__item'>
                <a href='#' className='header__nav__link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className='dark__bg'></div> */}
        </>
      )}
    </>
  )
}

export default Header
