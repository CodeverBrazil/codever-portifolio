import React from 'react'

import './style.css'

function Navbar() {
  return (
    <>
      <nav  className='menu'>
        <ul className='list-menu'>
          <li className='list-menu-item'><a href="#">HOME</a><div className="list-menu-item-hover"/></li>
          <li className='list-menu-item'><a href="#">SOBRE</a><div className="list-menu-item-hover"/></li>
          <li className='list-menu-item'><a href="#">SKILLS</a><div className="list-menu-item-hover"/></li>
          <li className='list-menu-item'><a href="#">PORTIFOLIO</a><div className="list-menu-item-hover"/></li>
          <li className='list-menu-item'><a href="#">CONTATO</a><div className="list-menu-item-hover"/></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar