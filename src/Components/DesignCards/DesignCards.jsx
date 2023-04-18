import React from 'react'
import { motion as m } from 'framer-motion'
import './DesignCards.css'

function DesignCards(props) {
  return <m.div className={props.className}>{props.children}</m.div>
}

export default DesignCards
