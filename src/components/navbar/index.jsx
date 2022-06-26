import React, { Fragment } from 'react'

import './styles.css'

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className='menu'>
        <ul className='list-menu'>
          {
            props.items.map((item) => (
              // eslint-disable-next-line
              <li key={item} className='list-menu-item'><a href="">{item}</a><div className="list-menu-item-hover" /></li>
            ))
          }
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navbar