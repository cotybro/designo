import React from 'react'
import './DesignHero.css'
function DesignHero(props) {
  return (
    <div className='desktop__padding'>
      <div className='designhero__container'>{props.children}</div>
    </div>
  )
}

export default DesignHero
