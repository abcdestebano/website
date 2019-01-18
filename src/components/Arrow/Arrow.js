import React from 'react'
import { Animated } from "react-animated-css";
import icon from '../../assets/arrow-pointing-to-right.svg';
import { Link } from 'react-router-dom';
import './style.css';

const Arrow = ({
   toRight,
   toPage = '/',
   pathname,
   text
}) => {
   return (
      <div style={toRight ? { right: '3%' } : { left: '1%' }} className="Arrow-container">
         <Animated animationIn={toRight ? "bounceInRight" : "bounceInLeft"} animationInDelay={2000} isVisible={true}>
            <Link to={toPage} className={toRight ? 'Arrow-to-right' : 'Arrow-to-left'}>
               <img src={icon} alt="arrow" />
               {text}
            </Link>
         </Animated>
      </div>
   )
}

export default Arrow