import styled from "styled-components";
import { fontSize } from "../../../styles/variables";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 750px) {
        align-items: flex-start;
    }
`;

const ScrollLink = styled.a`
    width: 100%;
    justify-content: center;
    display: flex;
`;

const ProductContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5rem;
    margin-right: 5rem;

    @media only screen and (max-width: 750px) {
        margin-left: 3rem;
        margin-right: 3rem;
        align-items: flex-start;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 20rem;
    background-color: #FFE5DE;
    z-index: -1;
    position: absolute;
`;

const ProductImageContainerDesktop = styled.div`
    width: 40rem;
    min-width: 20rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    overflow: hidden;
    position: relative;
    border-radius: 10px;

    @media only screen and (max-width: 1300px) {
        margin-right: 1rem;
    }

    @media only screen and (max-width: 1250px) {
        width: 30rem;
    }

    @media only screen and (max-width: 1100px) {
        width: 20rem;
    }

    @media only screen and (max-width: 950px) {
        width: 100%;
    }

    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

const ProductImageContainerMobile = styled.div`
    display: none;

    @media only screen and (max-width: 750px) {
        width: 100%;
        height: 30rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgray;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
`;

const CtaContainer = styled.div`
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    @media only screen and (max-width: 750px) {
        align-items: flex-start;
    }
`;

const HeaderTitle = styled.h2`
    color: black;
    font-weight: normal;
    width: 100%;
    text-align: center;
    font-size: ${fontSize.heading};
    margin-bottom: 3rem;
    width: 75%;

    @media only screen and (max-width: 750px) {
        margin-top: 2rem;
        width: 100%;
    }
`;

export {
    HeaderContainer, 
    ProductContainer, 
    Background, 
    ProductImageContainerDesktop, 
    ProductImageContainerMobile, 
    CtaContainer, 
    HeaderTitle,
    ScrollLink
};