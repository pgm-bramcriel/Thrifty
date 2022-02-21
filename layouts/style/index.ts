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
    font-weight: inherit;
    font-size: inherit;
  };

  .main-container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 1rem;
  };
`

export {
  GlobalStyling
}