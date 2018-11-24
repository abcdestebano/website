import React from 'react'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutWork from './components/LayoutWork/LayoutWork';

const Work = ({
   location
}) => {
   return (
      <Background>
         <Header {...location} />
         <LayoutWork pathname={location.pathname} />
      </Background>
   )
}


export default Work