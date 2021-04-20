import React from 'react'

import Navbar from "../../navbar"

import '../../../styles/global.css'
import './styles.css'

function Header(props) {
  const items = ["HOME", "SOBRE", "SKILLS", "PORTIFOLIO", "CONTATO"]

  return (
    <div className="header">
      <div className="container-blink">
        <p className="logo-title">Codever:~$ </p><span className="logo-title" id="blink">|</span>
      </div>
      <Navbar items={items} />
    </div>
  )
}

export default Header