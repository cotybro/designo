import React from 'react'
import { motion as m } from 'framer-motion'
import './MapCard.css'

function MapCard(props) {
  return (
    <>
      <div className={props.className}>{props.children}</div>
    </>
  )
}

export default MapCard
