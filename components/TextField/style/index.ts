import styled from "styled-components";
import { shadow } from "../../../styles/variables";

const TextFieldContainer = styled.div`
  .is-invalid {
    border: solid 1px #dc3545 !important;
  }
`

const TextFieldStyle = styled.input`
  border: none;
  box-shadow: ${shadow.main};
`

export {
  TextFieldStyle,
  TextFieldContainer
}