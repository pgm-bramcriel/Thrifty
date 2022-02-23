import Link from 'next/link'
import React from 'react'
import { LogoStyle } from './style'
import logo from '../../assets/logo.svg'
import Image from 'next/image'

const Logo = ({name='Thrifty'}: any) => {
  return (
    <LogoStyle>
      <Link href="/">
        <a>
          <Image src={logo} alt={`${name} logo`}/>
        </a>
      </Link>
    </LogoStyle>
  )
}

export default Logo