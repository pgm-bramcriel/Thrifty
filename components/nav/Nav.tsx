import React from 'react'
import { Container } from '../../layouts/style'
import Logo from '../logo/Logo'
import { NavStyle } from './style'

const Nav = () => {
  return (
    <NavStyle>
      <Container>
        <Logo name='Thrifty'/>
      </Container>
    </NavStyle>
  )
}

export default Nav