import React from 'react'
import './ContactUs.css'
function ContactUs() {
  return (
    <div className='contact__container'>
      <div className='contact__text__container'>
        <h2 className='contact__title'>Contact Us</h2>
        <p className='contact__text'>
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </p>
      </div>
      <form className='form__group'>
        <input
          type='text'
          className='form__input'
          placeholder='Name'
          id='name'
          required
        />
        <input
          type='email'
          className='form__input'
          placeholder='Email Address'
          id='email'
          required
        />
        <input
          type='tel'
          className='form__input'
          placeholder='Phone'
          id='phone'
          required
        />

        <textarea
          className='form__input'
          placeholder=' Your Message'
          id='message'
          required
        ></textarea>

        <button className='btn btn__primary'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
