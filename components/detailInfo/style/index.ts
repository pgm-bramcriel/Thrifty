import styled from "styled-components";
import { color, fontSize, media } from "../../../styles/variables";

const DetailInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: ${media.medium}) {
    width: 48%;
    margin-bottom: 0rem;
  }

  h2 {
    font-size: ${fontSize.heading};
    margin: inherit;
  }
`
const Price = styled.h2`
  font-weight: bold;
  width: 100%;
  padding-bottom: 1rem;
`

const Title = styled.h2`
  font-weight: normal;
  padding-bottom: 1rem;
`

const DetailInfoInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    width: 100%;
    color: ${color.grey};
    font-size: 1.5rem;
    font-family: 'Unna';

    @media (min-width: ${media.medium}) {
      padding-bottom: 2rem;
    }
  }
`

const DesktopButtonContainer = styled.div`
  display: none;

  @media (min-width: ${media.medium}) {
    display: block;
  }
`

export {
  DetailInfoContainer,
  Price,
  Title,
  DetailInfoInner,
  DesktopButtonContainer
}