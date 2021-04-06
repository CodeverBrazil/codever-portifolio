import React from 'react'

import './style.css'

function Navbar() {
  return (
    <>
      <nav  className='menu'>
        <ul className='list-menu'>
          <li className='list-menu-item'><a href="">HOME</a></li>
          <li className='list-menu-item'><a href="">SOBRE</a></li>
          <li className='list-menu-item'><a href="">SKILLS</a></li>
          <li className='list-menu-item'><a href="">PORTIFOLIO</a></li>
          <li className='list-menu-item'><a href="">CONTATO</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar