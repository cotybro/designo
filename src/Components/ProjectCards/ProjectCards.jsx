import React from 'react'
import './ProjectCards.css'
import { motion as m } from 'framer-motion'

function ProjectCards(props) {
  return <m.div className={props.className}>{props.children}</m.div>
}

export default ProjectCards
