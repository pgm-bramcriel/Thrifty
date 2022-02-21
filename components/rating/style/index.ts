import styled from "styled-components";
import { color, transition } from "../../../styles/variables";

const RatingStyling = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.1rem;
  }

  button {
    padding: 0;
    cursor: pointer;
    background-color: #00000000;
    outline: none;
    border: none;
    transition: 0.2s ease;
  }
`

const Upvote = styled.button`
  svg {
    color: ${color.green};
    width: 2rem;
    height: 2rem;
    transition: ${transition.main};

    &:hover {
      transform: scale(1.2);
    }
  }
`

const Downvote = styled.button`
  svg {
    color: ${color.mainRed};
    width: 2rem;
    height: 2rem;
    transition: ${transition.main};

    &:hover {
      transform: scale(1.2);
    }
  }
`

export {
  RatingStyling,
  Upvote,
  Downvote
}