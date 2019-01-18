import React, { Component } from 'react'

// REDUX
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions';

import './style.css'

class Language extends Component {

  handleChangeLanguage = (language) => {
    const { changeLanguage } = this.props
    changeLanguage(language)
  }

  render() {
    return (
      <div className="LanguageContianer">
        <img
          onClick={() => this.handleChangeLanguage('spanish')}
          className="LanguageFlag"
          src="https://image.flaticon.com/icons/svg/580/580854.svg"
          alt="Español" />
        <img
          onClick={() => this.handleChangeLanguage('english')}
          className="LanguageFlag"
          src="https://image.flaticon.com/icons/svg/581/581038.svg"
          alt="Inglés" />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => dispatch(changeLanguage(language))
})

export default connect(() => ({}), mapDispatchToProps)(Language)