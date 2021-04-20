import React from 'react'

import './styles.css'

function Navbar(props) {
  return (
    <>
      <nav  className='menu'>
        <ul className='list-menu'>
          {
            props.items.map((item) => (
              <li key={item} className='list-menu-item'><a href="">{item}</a><div className="list-menu-item-hover"/></li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar