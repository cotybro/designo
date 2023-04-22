import React from 'react'
import { Link } from 'react-router-dom'
import './GetInTouch.css'
import { motion as m } from 'framer-motion'

function GetInTouch() {
  return (
    <div className='get__in__touch'>
      <div className='get__in__touch__container'>
        <div className='get__in__touch__container__top'>
          <h3 className='get__in__touch__title'>
            Let's talk about your project
          </h3>
          <p className='get__in__touch__text'>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div className='get__in__touch__container__bottom'>
          <Link to='/contact'>
            <button className='btn btn__primary'>Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
