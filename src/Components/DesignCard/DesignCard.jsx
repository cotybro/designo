import React from 'react'
import './DesignCard.css'
function DesignCard(props) {
  return <div className='design__card'>{props.children}</div>
}

export default DesignCard
