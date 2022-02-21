import styled from "styled-components";
import { media, radius, shadow, transition } from "../../../styles/variables";

const CtaButton = styled.button`
    background-color: #E76C6C;
    border: none;
    border-radius: ${radius.small};
    font-size: 1.4rem;
    padding: 0.75rem 0.5rem;
    color: white;
    cursor: pointer;
    transition: ${transition.main};
    box-shadow: ${shadow.main};
    width: 100%;
    max-width: 100%;
 
    &:hover {
        background-color: #b92728;
    }

    @media (min-width: ${media.medium}) {
        width: 18rem;
    }
`;

export {CtaButton};