import React, { Component } from 'react'
import _ from 'lodash'
import './styles.css'
import Arrow from '../../../../components/Arrow/Arrow';

import Company from '../Company/Company';
import ImageBackground from '../../../../components/ImageBackground/ImageBackground';

import image from '../../../../assets/image4.jpeg'

// FIREBASE
import { database } from '../../../../config/firebase'

class LayoutWork extends Component {

   state = {
      companys: [],
      indexCompany: 0,
      companyShow: null
   }

   /**
    *
    *
    * @memberof LayoutWork
    */
   componentWillMount() {
      const companys = []
      database.collection('companys').onSnapshot((data) => {
         data.forEach((company) => {
            const dataCompany = company.data()
            companys.push(dataCompany)
         })
         this.setState({ companys })
      })
   }

   /**
    *
    *
    * @param {*} index
    * @param {*} toRight
    */
   handleChangeCompany = (index, toRight) => {
      const indexCompany = toRight ? this.state.indexCompany + 1 : this.state.indexCompany - 1
      this.setState({ indexCompany })
   }

   /**
    *
    *
    * @param {*} companys
    */
   orderCompanys = (companys) => _.orderBy(companys, ['id'], 'desc')

   /**
    *
    *
    * @returns
    * @memberof LayoutWork
    */
   render() {
      const { pathname, language } = this.props
      const { companys, indexCompany } = this.state
      const companysShow = this.orderCompanys(companys)
      return (
         <div className="LayoutWork">
            <ImageBackground pathname={pathname} image={image} />
            <Arrow pathname={pathname} toRight={false} toPage="/about" text={language === 'spanish' ? "Volver a sobre mi" : "Come back to about"} />
            {companysShow.length > 0 && <Company
               language={language}
               key={companysShow[indexCompany].id}
               changeCompany={this.handleChangeCompany}
               index={indexCompany}
               company={companysShow[indexCompany]}
               lengthCompanys={companysShow.length} />}
            <Arrow pathname={pathname} toPage="/studies" toRight={true} text={language === 'spanish' ? "Aquí están mis estudios!" : "Here are my studies!"} />
         </div>
      )
   }
}
export default LayoutWork