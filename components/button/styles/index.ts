import styled from "styled-components";

const CtaButton = styled.button`
    width: 10rem;
    background-color: #E76C6C;
    border: none;
    border-radius: 10px;
    font-size: 1.4rem;
    padding: 0.5rem;
    color: white;
    cursor: pointer;

    @media only screen and (max-width: 750px) {
        width: 100%;
    }
`;

export {CtaButton};