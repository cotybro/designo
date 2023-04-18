import React, { useState } from 'react'
import { motion as m, stagger } from 'framer-motion'
import './Header.css'
import logoDark from '../../../src/assets/shared/desktop/logo-dark.png'
import hamburger from '../../../src/assets/shared/mobile/icon-hamburger.svg'
import close from '../../../src/assets/shared/mobile/icon-close.svg'
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const staggerListItems = stagger(0.1, { startDelay: 0.1 })

  return (
    <>
      <m.header>
        <img src={logoDark} alt='DESIGNO' className='header__logo' />
        <img
          src={isOpen ? close : hamburger}
          alt={isOpen ? 'close' : 'open'}
          className='header__nav__mobile'
          onClick={() => setIsOpen(!isOpen)}
        />
      </m.header>
      {isOpen && (
        <>
          <nav>
            <ul className='header__nav'>
              <li className='header__nav__item'>
                <a href='#'>Our Company</a>
              </li>
              <li className='header__nav__item'>
                <a href='#'>Locations</a>
              </li>
              <li className='header__nav__item'>
                <a href='#'>Contact</a>
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
