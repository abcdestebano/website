import React from 'react'
import { Animated } from "react-animated-css";
import './styles.css'

const Study = ({
   name,
   image,
   info,
   certificates,
   marginTop,
}) => {
   return (
      <div style={{ marginTop }}>
         <Animated animationIn="bounceInLeft"
            animationInDelay={500}
            isVisible={true} className="StudyTitleContainer">
            <span className="StudyTitle">{name}</span>
            {image && <img className="StudyImage" src={image} alt={name} />}
         </Animated>
         <Animated animationIn="bounceInRight"
            animationInDelay={1000}
            isVisible={true} className="StudyInfoContainer">
            <span className="StudyInfo">{info}</span>
         </Animated>
         {certificates.length > 0 && <Animated animationIn="fadeIn"
            animationInDelay={1300}
            isVisible={true} className="StudyCertificates">
            {certificates.map((certificate, index) => (
               <img className="StudyImageCertificate" key={index} src={certificate} alt={certificate} />)
            )}
         </Animated>}
      </div>
   )
}


export default Study
