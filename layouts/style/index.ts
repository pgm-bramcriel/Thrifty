import styled from "styled-components"
import { color, shadow } from "../../styles/variables"

const GlobalStyling = styled.div`
  * {
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    word-break: break-word;
  };

  h2,
  h3 {
    font-family: 'Unna';
  }

  ul {
    padding-left: 0;
    margin: 0;
  }
  
  .main-container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;
  };

  .secondary-container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .nav-scroll {
    box-shadow: ${shadow.main};
  }

  .showBasket {
    display: flex;
  }
`

const MainStyling = styled.main`
  padding-top: 4rem;
  min-height: 80vh;
  margin-top: 3rem;
`

export {
  GlobalStyling,
  MainStyling
}