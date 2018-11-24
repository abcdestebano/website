import React from 'react'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutAbout from './components/LayoutAbout/LayoutAbout'

const About = ({
   location
}) => {
   return (
      <Background>
         <Header {...location} />
         <LayoutAbout pathname={location.pathname} />
      </Background>
   )
}


export default About