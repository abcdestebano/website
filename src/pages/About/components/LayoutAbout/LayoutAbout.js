import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import PersonalSkills from '../PersonalSkills/PersonalSkills'
import Arrow from '../../../../components/Arrow/Arrow'
import ImageBackground from '../../../../components/ImageBackground/ImageBackground';

import image from '../../../../assets/image3.jpeg'

import './style.css'

const LayoutAbout = ({
   pathname
}) => {
   return (
      <div className="LayoutAbout">
         <Arrow pathname={pathname} toPage="/" toRight={false} />
         <ImageBackground pathname={pathname} image={image} />
         <Paragraph />
         <PersonalSkills />
         <Arrow pathname={pathname} toPage="/work" toRight={true} />
      </div>
   )
}

export default LayoutAbout