import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

const Links = ({
   pathname,
   language
}) => {
   return (
      <div className="Links-container">
         <div className="Link-container">
            <Link className={`Links-link ${pathname === '/about' ? 'Link-active' : ''}`} to="/about">
               <span> {language === 'spanish' ? 'Sobre mi' : 'About'} </span>
            </Link>
            <hr className={pathname === '/about' ? 'Link-line' : 'Link-line-hide'} />
         </div>
         <div className="Link-container">
            <Link className={`Links-link ${pathname === '/work' ? 'Link-active' : ''}`} to="/work">
               <span>{language === 'spanish' ? 'Trabajos' : 'Work'}</span>
            </Link>
            <hr className={pathname === '/work' ? 'Link-line' : 'Link-line-hide'} />
         </div>
         <div className="Link-container">
            <Link className={`Links-link ${pathname === '/studies' ? 'Link-active' : ''}`} to="/studies">
               <span> {language === 'spanish' ? 'Estudio' : 'Studies'} </span>
            </Link>
            <hr className={pathname === '/studies' ? 'Link-line' : 'Link-line-hide'} />
         </div>
      </div>
   )
}

const mapStateToProps = ({ languageReducer }) => ({
   language: languageReducer.language
})


export default connect(mapStateToProps)(Links) 