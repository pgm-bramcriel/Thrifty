import styled from "styled-components";
import { transition } from "../../../styles/variables";

const LogoStyle = styled.div`
  width: 6rem;
  height: 6rem;
  transition: ${transition.main};
  margin-left: -0.75rem;

  &:hover {
    transform: scale(1.05);
  }
`

export {
  LogoStyle
}