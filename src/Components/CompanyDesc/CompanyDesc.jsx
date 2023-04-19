import React from 'react'
import { motion as m } from 'framer-motion'
import './CompanyDesc.css'

function CompanyDesc(props) {
  return <m.div className={props.className}>{props.children}</m.div>
}

export default CompanyDesc
