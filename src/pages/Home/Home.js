import React from 'react'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutHome from './components/LayoutHome/LayoutHome';

const Home = ({
   location
}) => {
   return (
      <Background key="home">
         <Header {...location} />
         <LayoutHome pathname={location.pathname} />
      </Background>
   )
}

export default Home
