import React from 'react'
import { LogoStyle } from './style'

const Logo = ({name='Thrifty'}: any) => {
  return (
    <LogoStyle>
      {name}
    </LogoStyle>
  )
}

export default Logo