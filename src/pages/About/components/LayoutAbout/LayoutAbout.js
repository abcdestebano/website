import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import PersonalSkills from '../PersonalSkills/PersonalSkills'
import Arrow from '../../../../components/Arrow/Arrow'
import ImageBackground from '../../../../components/ImageBackground/ImageBackground';

import image from '../../../../assets/image3.jpeg'

import './style.css'

const LayoutAbout = ({
   pathname,
   language
}) => {
   return (
      <div className="LayoutAbout">
         <Arrow pathname={pathname} toPage="/" toRight={false}
            text={language === 'spanish' ? "Volver a home" : "Come back to home"} />
         <ImageBackground pathname={pathname} image={image} />
         <Paragraph language={language} />
         <PersonalSkills language={language} />
         <Arrow pathname={pathname} toPage="/work" toRight={true}
            text={language === 'spanish' ? "Aquí están mis trabajos!" : "Here are my works!"} />
      </div>
   )
}

export default LayoutAbout