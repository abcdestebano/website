import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'
import ArrowCompany from '../ArrowCompany/ArrowCompany';

const Company = ({
   changeCompany,
   index,
   company
}) => {
   return (
      <div className="Company-container">
         <Animated className="Company-title"
            animationIn="bounceInLeft"
            isVisible={true} >
            <h1>{company.name}</h1>
         </Animated>
         <Animated className="Company-role"
            animationIn="bounceInLeft"
            animationInDelay={800}
            isVisible={true} >
            <p>{company.role}</p>
         </Animated>
         <Animated className="Company-description"
            animationIn="bounceInRight"
            animationInDelay={1200}
            isVisible={true} >
            <p>{company.description}</p>
         </Animated>
         <div className="Company-technologies">
            {
               company.technologies.map((technology, index) => (
                  <Animated key={index} animationIn="flipInX"
                     animationInDelay={1800}
                     isVisible={true} >
                     <div id="image-tech" style={{ backgroundImage: `url(${technology.image})` }}></div>
                     <span>{technology.name}</span>
                  </Animated>
               ))
            }
         </div>
         <Animated className="Company-year"
            animationIn="bounceInLeft"
            animationInDelay={1800}
            isVisible={true} >
            <span style={{ fontWeight: 'bold' }}>Year</span>
            <span>{company.year}</span>
         </Animated>

         <Animated className="Company-image"
            animationInDelay={1200}
            animationIn="fadeIn"
            isVisible={true} >
            <img src={company.image} alt={company.name} />
         </Animated>
         <div style={index === 0 ? { justifyContent: 'flex-end' } : { justifyContent: 'space-between' }}
            className="Company-arrows">
            {
               index !== 0 && <ArrowCompany
                  index={index}
                  changeCompany={changeCompany}
                  toRight={false} />
            }
            {
               index !== 3 && <ArrowCompany
                  index={index}
                  changeCompany={changeCompany}
                  toRight={true} />
            }
         </div>
      </div>
   )
}

export default Company