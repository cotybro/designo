import React from 'react'
import './DesignHero.css'
function DesignHero(props) {
  return <div className='designhero__container'>{props.children}</div>
}

export default DesignHero
