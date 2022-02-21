import React from 'react'
import Logo from '../logo/Logo'
import { NavStyle } from './style'

const Nav = () => {
  return (
    <NavStyle>
      <div className='main-container'>
        <Logo name='Thrifty'/>
      </div>
    </NavStyle>
  )
}

export default Nav