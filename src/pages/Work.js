import React from 'react'

// COMPONENTS
import Header from '../components/Header/Header';
import Background from '../components/Background/Background';


const Work = ({
   location
}) => {
   return (
      <Background>
         <Header {...location} />
      </Background>
   )
}


export default Work