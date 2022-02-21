import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo from '../logo/Logo'
import { FooterStyle, FooterNav, FooterSocials, FooterFlex, BottomBanner } from './style'

const Footer = () => {
  return (
    <FooterStyle>
      <section className='main-container'>
        <FooterFlex>
          <FooterNav>
            <Logo/>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/admin">Admin</Link>
              </li>
            </ul>
          </FooterNav>

          <FooterSocials>
            <li>
              <Link href="https://github.com/pgm-bramcriel/Thrifty" passHref>
                <FacebookIcon/>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/pgm-bramcriel/Thrifty" passHref>
                <InstagramIcon/>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/pgm-bramcriel/Thrifty" passHref>
                <TwitterIcon/>
              </Link>
            </li>
          </FooterSocials>
        </FooterFlex>
        <BottomBanner>
          <p>Property of Antenna ©</p>
        </BottomBanner>
      </section>
    </FooterStyle>
  )
}

export default Footer