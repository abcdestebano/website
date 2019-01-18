import React from 'react'
import { connect } from 'react-redux'


// COMPONENTS
import Header from '../../components/Header/Header';
import Background from '../../components/Background/Background';
import LayoutWork from './components/LayoutWork/LayoutWork';

const Work = ({
   location,
   language
}) => (
      <Background>
         <Header {...location} />
         <LayoutWork language={language} pathname={location.pathname} />
      </Background>
   )

const mapStateToProps = ({ languageReducer }) => ({
   language: languageReducer.language
})

export default connect(mapStateToProps)(Work) 