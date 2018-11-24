/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

const Name = () => {
   return (
      <div className="Name-container">
         <Animated animationIn="bounceInLeft" isVisible={true}>
            <span>ESTEBAN</span>
         </Animated>
         <Animated animationIn="bounceInRight" isVisible={true}>
            <span style={{ marginLeft: '25%' }}>ARAGÓN</span>
         </Animated>
         <Animated animationIn="fadeInUp" animationInDelay={1000}  isVisible={true}>
            <p className="Name-profession">Fullstack Developer 👨‍💻</p>
         </Animated>
      </div>
   )
}

export default Name
