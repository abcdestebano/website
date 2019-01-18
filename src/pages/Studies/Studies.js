
import React from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutStudies from './componets/LayoutStudies/LayoutStudies';

const Studies = ({
   location,
   language
}) => (
      <Background>
         <Header {...location} />
         <LayoutStudies language={language} pathname={location.pathname} />
      </Background>
   )

const mapStateToProps = ({ languageReducer }) => ({
   language: languageReducer.language
})

export default connect(mapStateToProps)(Studies) 
