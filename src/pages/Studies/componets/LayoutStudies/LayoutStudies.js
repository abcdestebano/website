import React from 'react'

// COMPONENTS
import ImageBackground from '../../../../components/ImageBackground/ImageBackground';
import Arrow from '../../../../components/Arrow/Arrow';
import './styles.css';
import image from '../../../../assets/image5.jpeg'
import Study from '../Study/Study';
import { STUDIES } from '../../../../constants/studies';

const LayoutStudies = ({
   pathname,
   language
}) => {
   console.log(language)
   return (
      <div className="LayoutStudies">
         <ImageBackground pathname={pathname} image={image} />
         <Arrow pathname={pathname} toRight={false} toPage="/work" text={language === 'spanish' ? "Volver a trabajos" : "Come back to works"} />
         <div className="Studies">
            {
               STUDIES.map((study) => (
                  <Study
                     key={study.id}
                     name={study.name}
                     image={study.image}
                     info={language === 'spanish' ? study.infoSpanish : study.info}
                     certificates={study.certificates}
                     marginTop={study.margin}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default LayoutStudies
