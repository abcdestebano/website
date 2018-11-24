import React from 'react'
import { Animated } from "react-animated-css";
import facebook from '../../../../assets/facebook.svg';
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
            <a href="https://www.facebook.com/aragonestebann" target="blank">
               <img src={facebook} alt="Facebook" />
            </a>
         </Animated>
      </div>
   )
}

export default Networks