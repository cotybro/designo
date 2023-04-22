import React, { useEffect } from 'react'
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
    </>
  )
}

export default Contact
