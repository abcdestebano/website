import React from 'react'
import arrow from '../../../../assets/arrow-pointing-to-right.svg'
import './style.css'

const ArrowCompany = ({
   changeCompany,
   index,
   toRight
}) => {
   return (
      <div
         onClick={() => changeCompany(index, toRight)}
         className={toRight ? 'ArrowCompany-container-right' : 'ArrowCompany-container-left'}>
         <img src={arrow} alt="arrow" />
      </div>
   )
}


export default ArrowCompany