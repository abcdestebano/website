import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'
import ArrowCompany from '../ArrowCompany/ArrowCompany';
import angular from '../../../../assets/technologies/angular.png'
import firebase from '../../../../assets/technologies/firebase.png'
import graphql from '../../../../assets/technologies/graphql.png'
import ionic from '../../../../assets/technologies/ionic.png'
import java from '../../../../assets/technologies/java.png'
import mongo from '../../../../assets/technologies/mongo.jpg'
import node from '../../../../assets/technologies/nodejs.png'
import reactnative from '../../../../assets/technologies/react-native.png'
import react from '../../../../assets/technologies/react.png'
import redux from '../../../../assets/technologies/redux.png'
import vue from '../../../../assets/technologies/vue.png'



const setImageTechnology = (name) => {
   switch (name) {
      case 'Angular': return angular
      case 'Angular.js': return angular
      case 'React Native': return reactnative
      case 'React': return react
      case 'Node.js': return node
      case 'MongoDB': return mongo
      case 'GraphQL': return graphql
      case 'Redux': return redux
      case 'Firebase': return firebase
      case 'Ionic': return ionic
      case 'Vue.js': return vue
      case 'Java': return java
      default: return ''
   }
}

const Company = ({
   changeCompany,
   index,
   company,
   lengthCompanys,
   language
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
            <p>{language === 'spanish' ? company.roleSpanish : company.role}</p>
         </Animated>
         <Animated className="Company-description"
            animationIn="bounceInRight"
            animationInDelay={1200}
            isVisible={true} >
            <p>{language === 'spanish' ? company.descriptionSpanish : company.description}</p>
         </Animated>
         <div className="Company-technologies">
            {
               company.technologies.map((technology, index) => (
                  <Animated key={index} animationIn="flipInX"
                     animationInDelay={1800}
                     isVisible={true} >
                     <div id="image-tech" style={{ backgroundImage: `url(${setImageTechnology(technology)})` }}></div>
                     <span>{technology}</span>
                  </Animated>
               ))
            }
         </div>
         <Animated className="Company-year"
            animationIn="bounceInLeft"
            animationInDelay={1800}
            isVisible={true} >
            <span style={{ fontWeight: 'bold' }}> {language === 'spanish' ? 'Año' : 'Year'} </span>
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
               index !== lengthCompanys - 1 && <ArrowCompany
                  index={index}
                  changeCompany={changeCompany}
                  toRight={true} />
            }
         </div>
      </div>
   )
}

export default Company