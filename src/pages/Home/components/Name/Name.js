/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

const Name = ({ language }) => {
   return (
      <div className="Name-container">
         <Animated animationIn="bounceInLeft" isVisible={true}>
            <span>ESTEBAN</span>
         </Animated>
         <Animated animationIn="bounceInRight" isVisible={true}>
            <span className="Name-Margin-Lastname">ARAGÓN</span>
         </Animated>
         <Animated animationIn="fadeInUp" animationInDelay={1000} isVisible={true}>
            <p className="Name-profession"> {language === 'spanish' ? 'Desarrollador Fullstack 👨‍💻' : 'Fullstack Developer 👨‍💻'} </p>
         </Animated>
      </div>
   )
}

export default Name
