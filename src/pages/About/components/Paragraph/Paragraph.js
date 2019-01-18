/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Animated } from "react-animated-css";
import './style.css'
const Paragraph = ({
   language
}) => (
      <div className="Paragraph-container">
         <Animated animationIn="bounceInLeft" isVisible={true}>
            <span className="Paragraph-hi">{language === 'spanish' ? "Hola," : "Hello,"} </span>
         </Animated>
         <Animated className="Paragraph-text-container" animationIn="bounceInRight" animationInDelay={500} isVisible={true}>
            {language === 'spanish'
               ? <span className="Paragraph-text">
                  Soy Esteban Aragón, tengo 21 años.
                  Desarrollador fullstack de aplicaciones web y aplicaciones móviles de Colombia.
                  Amante del software, autodidacta, con espíritu de ayudar a las personas, creando tecnología que mejore la calidad de sus vidas. 👨‍💻 </span>
               : <span className="Paragraph-text">
                  I'm Esteban Aragón, I'm 21 years old.
                  Fullstack developer of web apps and mobile apps from Colombia.
               Software lover, autodidact, with spirit of helping people, creating technology that improves the quality of their lives. 👨‍💻 </span>}
         </Animated>
      </div>
   )

export default Paragraph
