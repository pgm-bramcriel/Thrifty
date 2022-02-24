import styled from "styled-components";
import { color, media } from "../../../styles/variables";

const PopularSection = styled.section`
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 10rem;
`;

const Background = styled.div`
    width: 50%;
    height: 70%;
    background-color: ${color.accentColor};
    z-index: -1;
    position: absolute;

    @media only screen and (max-width: 750px) {
        width: 100%;
    }
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
    grid-gap: 1rem;
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background: #262525;
        border-radius: 1ex;
        -webkit-border-radius: 1ex;
    }

    ::-webkit-scrollbar-thumb {
        background: ${color.mainRed};
        border-radius: 1ex;
        -webkit-border-radius: 1ex;
    }

    @media (min-width: ${media.large}) {
        overflow: inherit;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export { 
    PopularSection,
    Background,
    ContentContainer,
    SectionTitle,
    ItemContainer,
}