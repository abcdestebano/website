import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

import { PERSONAL_SKILLS } from '../../../../constants/skils'

const PersonalSkills = () => {
   return (
      <div className="PersonalSkills-container">
         {
            PERSONAL_SKILLS.map((skill, index) => (
               <Animated
                  className="Paragraph-text-container"
                  animationIn="bounceInRight"
                  animationInDelay={skill.time}
                  isVisible={true}>
                  <span>{skill.name}</span>
               </Animated>
            ))
         }
      </div>
   )
}

export default PersonalSkills
