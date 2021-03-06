import { width } from "@mui/system";
import styled from "styled-components";
import { media, shadow } from "../../../../styles/variables";

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FormAdd = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: ${media.medium}) {
    width: 45%;
    margin-bottom: 0;
  }
`

const FormUpdate = styled.div`
  width: 100%;

  @media (min-width: ${media.medium}) {
    width: 45%;
  }
`
const SelectStyle = styled.select`
  border: none;
  box-shadow: ${shadow.main};
`

export {
  FormContainer,
  FormAdd,
  FormUpdate,
  SelectStyle
}