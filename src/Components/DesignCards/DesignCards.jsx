import React from 'react'
import './DesignCards.css'
import { motion as m } from 'framer-motion'

function DesignCards(props) {
  return <m.div className={props.className}>{props.children}</m.div>
}

export default DesignCards
