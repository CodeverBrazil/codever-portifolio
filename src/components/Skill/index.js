import React from 'react'

import './styles.css'
import { SkillBar, SkillBarLevel, SkillBarHideContent } from '../SkillBar/styles'

function Skill(props) {

  return (
    <div className="skill-container">
      <div className="skill-img">
        <img src={"img/" + props.image + ".png"} alt="teste" />
      </div>
      <div className="skill-info">
        <span>{props.name}</span>
        <h3>{props.tech}</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu est, volutpat sit amet
          pellentesque et, facilisis sit amet odio.</span>
      </div>
      <SkillBar>
        <SkillBarLevel level={props.level}>
          <SkillBarHideContent level={props.level}>{props.level}%</SkillBarHideContent>
        </SkillBarLevel>
      </SkillBar>
    </div>
  )
}

export default Skill