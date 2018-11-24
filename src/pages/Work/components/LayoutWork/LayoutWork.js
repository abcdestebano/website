import React, { Component } from 'react'
import './styles.css'
import Arrow from '../../../../components/Arrow/Arrow';

import { COMPANYS } from '../../../../constants/companys'
import Company from '../Company/Company';
import ImageBackground from '../../../../components/ImageBackground/ImageBackground';

import image from '../../../../assets/image4.jpeg'

class LayoutWork extends Component {

   state = {
      companys: COMPANYS,
   }

   handleChangeCompany = (index, toRight) => {
      const companys = [...this.state.companys]
      companys[index].show = false
      companys[toRight ? index + 1 : index - 1].show = true
      this.setState({ companys, })
   }

   render() {
      const { pathname } = this.props
      const { companys } = this.state
      return (
         <div className="LayoutWork">
            <ImageBackground pathname={pathname} image={image} />
            <Arrow pathname={pathname} toRight={false} toPage="/about" />
            {
               companys.map((company, index) => {
                  if (company.show) {
                     return (
                        <Company
                           key={company.id}
                           changeCompany={this.handleChangeCompany}
                           index={index}
                           company={company} />
                     )
                  }
               })
            }
         </div>
      )
   }
}
export default LayoutWork