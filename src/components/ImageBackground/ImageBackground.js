import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'

const ImageBackground = ({
   image,
   pathname
}) => {
   return (
      <Animated animationIn="fadeIn" animationInDelay={300} animationOut="fadeOut" isVisible={true}>
         <div
            style={
               pathname === '/' || pathname === '/work' || pathname === '/studies'
                  ? { width: '53%' }
                  : { width: '45%' }
            }
            className="ImageBackground-container">
            <div style={{ backgroundImage: `url(${image})` }} className="ImageBackground" >
               <div className={pathname === '/' ? 'ImageBackground-left' : 'ImageBackground-left-aux'}></div>
               <div className="ImageBackground-right"></div>
            </div>
         </div>
      </Animated>
   )
}


export default ImageBackground