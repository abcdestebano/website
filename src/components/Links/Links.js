import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Links = ({
   pathname
}) => {
   return (
      <div className="Links-container">
         <div className="Link-container">
            <Link className={`Links-link ${pathname === '/about' ? 'Link-active' : ''}`} to="/about">
               <span>About</span>
            </Link>
            <hr className={pathname === '/about' ? 'Link-line' : 'Link-line-hide'} />
         </div>
         <div className="Link-container">
            <Link className={`Links-link ${pathname === '/work' ? 'Link-active' : ''}`} to="/work">
               <span>Work</span>
            </Link>
            <hr className={pathname === '/work' ? 'Link-line' : 'Link-line-hide'} />
         </div>
      </div>
   )
}


export default Links