import React from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutAbout from './components/LayoutAbout/LayoutAbout'

const About = ({
   location,
   language
}) => {
   return (
      <Background>
         <Header {...location} />
         <LayoutAbout language={language} pathname={location.pathname} />
      </Background>
   )
}

const mapStateToProps = ({ languageReducer }) => ({
   language: languageReducer.language
})

export default connect(mapStateToProps)(About) 