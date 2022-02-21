import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import Logo from '../logo/Logo'
import { NavInner, NavStyle, ShoppingButton } from './style'

const Nav = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset);
  return (
    <NavStyle className={`${offset > 0 ? "nav-scroll" : ""}`}>
      <NavInner className='main-container'>
        <Logo/>
        <ShoppingButton>
          <ShoppingBagIcon />
        </ShoppingButton>
      </NavInner>
    </NavStyle>
  )
}

export default Nav