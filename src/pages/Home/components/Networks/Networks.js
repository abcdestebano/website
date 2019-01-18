import React from 'react'
import { Animated } from "react-animated-css";
import envelope from '../../../../assets/envelope.svg';
import github from '../../../../assets/github-logo.svg';
import instagram from '../../../../assets/instagram.svg';
import twitter from '../../../../assets/twitter.svg';
import './style.css'

const Networks = () => {
   return (
      <div className="Networks-container">
         <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
            <a href="https://github.com/abcdestebano" target="blank">
               <img src={github} alt="GitHub" />
            </a>
         </Animated>
         <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
            <a href="https://twitter.com/freewindbreaker" target="blank">
               <img src={twitter} alt="Twitter" />
            </a>
         </Animated>
         <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
            <a href="https://www.instagram.com/abcdestebano/" target="blank">
               <img src={instagram} alt="Instagram" />
            </a>
         </Animated>
         <Animated animationIn="flipInX" animationInDelay={2000} isVisible={true}>
            <a href="mailto:esteban.aragonm@gmail.com">
               <img src={envelope} alt="Email" />
            </a>
         </Animated>
      </div>
   )
}

export default Networks