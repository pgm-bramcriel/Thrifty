import styled from "styled-components";
import { color } from "../../../styles/variables";

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
`

const ShoppingButton = styled.button`
  cursor: pointer;
  background-color: #00000000;
  outline: none;
  border: none;
  transition: 0.2s ease;

  &:hover {
    color: ${color.mainRed};
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

export {
  NavStyle,
  NavInner,
  ShoppingButton
}