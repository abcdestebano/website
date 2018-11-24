/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'
const Paragraph = () => (
   <div className="Paragraph-container">
      <Animated animationIn="bounceInLeft" isVisible={true}>
         <span className="Paragraph-hi">Hello 👋</span>
      </Animated>
      <Animated className="Paragraph-text-container" animationIn="bounceInRight" animationInDelay={500} isVisible={true}>
         <span className="Paragraph-text">
            I'm Esteban Aragón, I'm 21 years old.
            Fullstack developer of web apps and mobile apps from Colombia.
            Software lover, autodidact, with spirit of helping people, creating technology that improves the quality of their lives. 👨‍💻
         </span>
      </Animated>
   </div>
)

export default Paragraph
