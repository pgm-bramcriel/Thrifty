import styled from "styled-components";
import { color, media } from "../../../styles/variables";

const DetailContainer = styled.section`
`

const DetailInner = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media (min-width: ${media.medium}) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const Background = styled.div`
  position: absolute;
  left: 0;
  height: 65vh;

  background-color: ${color.accentColor};
  width: 100%;
  z-index: -1;

  @media (min-width: ${media.medium}) {
    width: 45%;
    height: 80vh;
  }
`

export {
  DetailContainer,
  DetailInner,
  Background
}