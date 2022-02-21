import styled from "styled-components";
import { color, shadow, transition } from "../../../styles/variables";

const CarrouselContainer = styled.ul`
  display: flex;
`
const CarrouselBall = styled.li`
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.25rem;
  background-color: ${color.white};
  box-shadow: ${shadow.main};
  border-radius: 100%;
  cursor: pointer;
  transition: ${transition.main};

  &:hover {
    background-color: ${color.grey};
  }

  &:first-child {
    background-color: ${color.grey};
  }
`

export {
  CarrouselContainer,
  CarrouselBall
}