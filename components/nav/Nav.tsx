import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import Logo from '../logo/Logo'
import { NavInner, NavStyle, ShoppingButton, NavRightContainer, ItemCounter, ShoppingIconContainer } from './style'
import Basket from '../basket/Basket';
import Weather from '../weather/Weather';
import { useStore } from '../../store/basketStore';

const Nav = () => {
  const [offset, setOffset] = useState(0);
  const [isHidden, setIsHidden] = useState<boolean>(true)

  const basket = useStore(state => state.items);

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
        <NavRightContainer>
          <Weather />
          <ShoppingIconContainer>
            <ItemCounter>
              <span>
                {basket.length}
              </span>
            </ItemCounter>
            <ShoppingButton onClick={() => setIsHidden(!isHidden)}>
              <ShoppingBagIcon />
            </ShoppingButton>
          </ShoppingIconContainer>
        </NavRightContainer>
        <Basket isHidden={isHidden}></Basket>
      </NavInner>
    </NavStyle>
  )
}

export default Nav