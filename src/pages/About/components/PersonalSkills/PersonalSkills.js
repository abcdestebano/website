import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

const PersonalSkills = () => {
   return (
      <div className="PersonalSkills-container">
         <Animated
            className="Paragraph-text-container"
            animationIn="bounceInRight"
            animationInDelay={1500}
            isVisible={true}>
            <span>Love</span>
         </Animated>
         <Animated
            className="Paragraph-text-container"
            animationIn="bounceInRight"
            animationInDelay={1800}
            isVisible={true}>
            <span>Faith</span>
         </Animated>
         <Animated
            className="Paragraph-text-container"
            animationIn="bounceInRight"
            animationInDelay={2100}
            isVisible={true}>
            <span>Gentleness</span>
         </Animated>
         <Animated
            className="Paragraph-text-container"
            animationIn="bounceInRight"
            animationInDelay={2400}
            isVisible={true}>
            <span>Humility</span>
         </Animated>
         <Animated
            className="Paragraph-text-container"
            animationIn="bounceInRight"
            animationInDelay={2700}
            isVisible={true}>
            <span>Responsibility</span>
         </Animated>
      </div>
   )
}

export default PersonalSkills
