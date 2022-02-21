import styled from "styled-components";
import { color, transition } from "../../../styles/variables";

const FooterStyle = styled.footer`
  color: black;
  background-color: ${color.accentColor};
  padding: 1rem 0;
  margin-top: 4rem;

  p {
    margin: 0;
  }
`
const FooterSocials = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin-left: 0.2rem;
  }

  svg {
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
    transition: ${transition.main};

    &:hover {
      color: ${color.mainRed};
    }
  }
`

const FooterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`

const BottomBanner = styled.div`
  margin-top: 1rem;
  font-style: italic;
  font-size: 0.80rem;

  @media (min-width: 45rem) {
    text-align: right;
    margin-top: 0;
  }
`

const FooterNav = styled.div`
  li {
    margin-bottom: 0.25rem;
    
    a {
      transition: ${transition.main};
  
      &:hover {
        color: ${color.mainRed};
      }
    }
  }
`

export {
  FooterStyle,
  FooterNav,
  FooterSocials,
  FooterFlex,
  BottomBanner
}