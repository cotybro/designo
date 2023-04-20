import React from 'react'
import './DesignCard.css'
function DesignCard(props) {
  return <div className={props.className}>{props.children}</div>
}

export default DesignCard
