import styled from "styled-components";
import { color, fontSize, media } from "../../../styles/variables";

const AllProductsSection = styled.section`
    width: 100%;
    margin-top: 5rem;
    padding-bottom: 7rem;
`;

const Background = styled.div`
    width: 100%;
    height: 70%;
    background-color: ${color.accentColor};
    z-index: -1;
    position: absolute;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1200px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const SectionTitle = styled.h3`
    padding-top: 5rem;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: normal;
`;

const ItemContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    grid-gap: 1rem;

    @media (min-width: ${media.large}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow: inherit;
    }

`;

export {
    AllProductsSection, 
    Background,
    ContentContainer,
    SectionTitle,
    ItemContainer
};