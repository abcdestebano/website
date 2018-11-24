import React from 'react'
import { Animated } from "react-animated-css";
import icon from '../../assets/arrow-pointing-to-right.svg';
import { Link } from 'react-router-dom';
import './style.css';

const Arrow = ({
   toRight,
   toPage = '/',
   pathname
}) => {
   return (
      <div style={toRight ? { right: '3%' } : { left: '1%' }} className="Arrow-container">
         <Animated animationIn={toRight ? "bounceInRight" : "bounceInLeft"} animationInDelay={2000} isVisible={true}>
            <Link to={toPage} className={toRight ? 'Arrow-to-right' : 'Arrow-to-left'}>
               <img src={icon} alt="arrow" />
               {pathname === '/'
                  ? <span>Hey, here is more about me!</span>
                  : pathname === '/about' && toRight
                     ? <span>Here are my works!</span>
                     : pathname === '/work'
                        ? <span>Come back to about</span>
                        : <span>Come back to home</span>}
            </Link>
         </Animated>
      </div>
   )
}

export default Arrow