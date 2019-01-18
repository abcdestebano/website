import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

import { PERSONAL_SKILLS_ENGLISH, PERSONAL_SKILLS_SPANISH } from '../../../../constants/skils'

const PersonalSkills = ({
   language
}) => {
   const skills = language === 'spanish' ? PERSONAL_SKILLS_SPANISH : PERSONAL_SKILLS_ENGLISH
   return (
      <div className="PersonalSkills-container">
         {
            skills.map((skill, index) => (
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
