import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import Logo from '../logo/Logo'
import { NavInner, NavStyle, ShoppingButton } from './style'
import { BasketContainer } from '../basket/style';
import Basket from '../basket/Basket';

const Nav = () => {
  const [offset, setOffset] = useState(0);
  const [isHidden, setIsHidden] = useState<boolean>(true)

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavStyle className={`${offset > 0 ? "nav-scroll" : ""}`}>
      <NavInner className='main-container'>
        <Logo/>
        <ShoppingButton onClick={() => setIsHidden(!isHidden)}>
          <ShoppingBagIcon />
        </ShoppingButton>
        <Basket isHidden={isHidden}></Basket>
      </NavInner>
    </NavStyle>
  )
}

export default Nav