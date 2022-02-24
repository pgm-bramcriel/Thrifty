import styled from "styled-components";
import { color, radius } from "../../../styles/variables";

const NavStyle = styled.nav`
  color: black;
  background-color: ${color.white};
  position: fixed;
  top: 0;
  padding: 0.5rem 0;
  width: 100%;
  z-index: 9999;
`
const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const ShoppingButton = styled.button`
  cursor: pointer;
  background-color: #00000000;
  outline: none;
  border: none;
  transition: 0.2s ease;
  padding: 0;

  &:hover {
    color: ${color.mainRed};
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

const NavRightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  p {
    font-family: 'Nunito';
  }
`

const ShoppingIconContainer = styled.div`
  position: relative;
`

const ItemCounter = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #a34444;
  border-radius: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -5px;
  top: -4px;

  span {
    color: ${color.white};
    font-family: 'Nunito';
  }
`

export {
  NavStyle,
  NavInner,
  ShoppingButton,
  NavRightContainer,
  ItemCounter,
  ShoppingIconContainer
}