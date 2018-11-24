import React from 'react'
import './styles.css'

// COMPONENTS
import ImageBackground from '../../../../components/ImageBackground/ImageBackground'
import Name from '../Name/Name';
import Networks from '../Networks/Networks';
import Arrow from '../../../../components/Arrow/Arrow';

// IMAGE
import image from '../../../../assets/image.jpeg'

const LayoutHome = ({
   pathname
}) => {
   return (
      <div className="LayoutHome">
         <ImageBackground pathname={pathname} image={image} />
         <Name />
         <Networks />
         <Arrow
            toRight={true}
            toPage="/about"
            pathname={pathname} />
      </div>
   )
}


export default LayoutHome