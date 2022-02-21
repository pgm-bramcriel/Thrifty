import React from 'react'
import { LogoStyle } from './style'

const Logo = ({name}: any) => {
  return (
    <LogoStyle>
      {name}
    </LogoStyle>
  )
}

export default Logo