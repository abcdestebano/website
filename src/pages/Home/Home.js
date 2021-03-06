import React from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutHome from './components/LayoutHome/LayoutHome';


const Home = ({
   location,
   language
}) => {
   return (
      <Background key="home">
         <Header {...location} />
         <LayoutHome language={language} pathname={location.pathname} />
      </Background>
   )
}

const mapStateToProps = ({ languageReducer }) => ({
   language: languageReducer.language
})

export default connect(mapStateToProps)(Home) 
