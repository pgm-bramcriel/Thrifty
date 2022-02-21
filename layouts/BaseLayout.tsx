import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import { GlobalStyling } from './style'

const BaseLayout:React.FC = ({children}) => {
  return (
    <GlobalStyling>    
    <Nav/>
    <main>
      {children}
    </main>
    <Footer/>
    </GlobalStyling>
  )
}

export default BaseLayout