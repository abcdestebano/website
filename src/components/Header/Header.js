import React from 'react'
import { Link } from 'react-router-dom'
// STYLES
import './style.css'

// COMPONENTS
import Avatar from '../Avatar/Avatar'
import Links from '../Links/Links';
import Language from '../Language/Language';

const Header = ({
   pathname
}) => {
   return (
      <header>
         <div className="Header">
            <Link to="/">
               <Avatar pathname={pathname} />
            </Link>
            <Links pathname={pathname} />
            <Language />
         </div>
      </header>
   )
}

export default Header