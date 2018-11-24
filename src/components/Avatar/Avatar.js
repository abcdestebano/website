import React from 'react'
import image from '../../assets/image2.jpg';
import './style.css'

const Avatar = ({
   pathname
}) => (
      <div className="Avatar-container">
         <div style={{ backgroundImage: `url(${image})` }} className="Avatar" />
         <hr className={pathname === '/' ? 'Avatar-line' : 'Avatar-line-hide'} />
      </div>
   )

export default Avatar
