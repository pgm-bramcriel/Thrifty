import styled from "styled-components";
import { transition } from "../../../styles/variables";

const LogoStyle = styled.div`
  width: 5rem;
  transition: ${transition.main};

  &:hover {
    transform: scale(1.05);
  }
`

export {
  LogoStyle
}