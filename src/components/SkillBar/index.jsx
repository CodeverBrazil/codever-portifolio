import React from 'react'

import { SkillBarBar, SkillBarLevel, SkillBarHideContent } from "./styles.jsx"

const SkillBar = (props) => {
  return (
    <SkillBarBar>
      <SkillBarLevel level={props.level}>
        <SkillBarHideContent level={props.level}>{props.level}%</SkillBarHideContent>
      </SkillBarLevel>
    </SkillBarBar>
  )
}

export default SkillBar