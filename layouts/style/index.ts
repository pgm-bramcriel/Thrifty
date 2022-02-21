import styled from "styled-components"

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
  }
`

const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export {
  GlobalStyling,
  Container
}