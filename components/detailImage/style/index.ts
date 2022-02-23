import styled from "styled-components";
import { media, radius, shadow } from "../../../styles/variables";

const DetailImageContainer = styled.div`
  height: 25rem;
  overflow: hidden;
  position: relative;
  border-radius: ${radius.main};
  width: 100%;
  box-shadow: ${shadow.main};

  @media (min-width: ${media.medium}) {
    height: 30rem;
  }
`

const MobileButtonContainer = styled.div`
  display: block;
  margin-top: 2rem;

  @media (min-width: ${media.medium}) {
    display: none;
  }
`

const LeftContainer = styled.div`
  width: 100%;

  @media (min-width: ${media.medium}) {
    width: 48%;
  }
`
const BottomImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export {
  DetailImageContainer,
  MobileButtonContainer,
  LeftContainer,
  BottomImage
}