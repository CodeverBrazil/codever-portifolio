import React from 'react'

import './styles.css'

function Skill(props) {

  return (
    <div className="skill-container">
      <img className="skill-img" src={"img/" + props.image + ".png"} alt="teste"/>
      <h2 className="skill-level">Nível: {props.nivel}%</h2>
    </div>
  )
}

export default Skill