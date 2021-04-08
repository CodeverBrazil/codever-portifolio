import React from 'react'

import '../../../styles/global.css'
import './styles.css'

function Footer(props) {
  return (
    <div className="footer">
      <span className="copyright">{props.value}</span>
    </div>
  )
}

export default Footer