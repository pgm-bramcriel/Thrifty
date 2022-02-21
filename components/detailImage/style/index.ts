import styled from "styled-components";
import { media, radius } from "../../../styles/variables";

const DetailImageContainer = styled.div`
  height: 30rem;
  overflow: hidden;
  position: relative;
  border-radius: ${radius.main};
  width: 100%;

  @media (min-width: ${media.medium}) {
    width: 48%;
    height: 42rem;
  }
`

export {
  DetailImageContainer
}