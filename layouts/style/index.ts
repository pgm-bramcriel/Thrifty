import styled from "styled-components"
import { color } from "../../styles/variables"

const GlobalStyling = styled.div`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    word-break: break-word;
  };

  .main-container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;
  };

  .nav-scroll {
    box-shadow: 7px 7px 15px 3px #DEDEDE;
  }
`

const MainStyling = styled.main`
  padding-top: 4rem;
  min-height: 100vh;
`

export {
  GlobalStyling,
  MainStyling
}