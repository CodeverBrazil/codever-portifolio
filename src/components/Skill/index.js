import React from 'react'

import { SkillContainer, SkillInfo, SkillImage, Image, Span, Titulo } from './styles.js'

import SkillBar from "../SkillBar/index"

function Skill(props) {

  return (
    <SkillContainer>
      <SkillImage>
        <Image src={`img/${props.image}.png`} />
      </SkillImage>
      <SkillInfo>
        <Span>{props.name}</Span>
        <Titulo>{props.tech}</Titulo>
        <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu est, volutpat sit amet
          pellentesque et, facilisis sit amet odio.</Span>
      </SkillInfo>
      <SkillBar level={props.level}/>
    </SkillContainer>
  )
}

export default Skill