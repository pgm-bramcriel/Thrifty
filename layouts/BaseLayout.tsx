import React from 'react'
import Basket from '../components/basket/Basket'
import { BasketContainer } from '../components/basket/style'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import { GlobalStyling, MainStyling } from './style'

const BaseLayout:React.FC = ({children}) => {
  return (
    <GlobalStyling>    
    <Nav/>
    <MainStyling>
      {children}
    </MainStyling>
    <Footer/>
    </GlobalStyling>
  )
}

export default BaseLayout