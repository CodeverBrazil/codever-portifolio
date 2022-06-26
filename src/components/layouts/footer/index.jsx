import React from 'react'

import '../../../styles/global.css'
import './styles.css'

const Footer = (props) => {
  return (
    <div className="footer">
      <span className="copyright">{props.value}</span>
    </div>
  )
}

export default Footer