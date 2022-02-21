import styled from "styled-components";
import { color } from "../../../styles/variables";

const PopularSection = styled.section`
    height: 50rem;
    width: 100%;
    margin-top: 5rem;
`;

const Background = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${color.accentColor};
    z-index: -1;
    position: absolute;

    @media only screen and (max-width: 750px) {
        width: 100%;
    }
`;

const MainWrapper = styled.div`
    width: 100%;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 6rem;
    padding-right: 6rem;

    @media only screen and (max-width: 1200px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

const SectionTitle = styled.h2`
    padding-top: 5rem;
    margin-bottom: 5rem;
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10rem;
    margin-right: 10rem;

    @media only screen and (max-width: 1300px) {
        margin-left: 7rem;
        margin-right: 7rem;
    }

    @media only screen and (max-width: 1200px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    @media only screen and (max-width: 1050px) {
        margin-left: 0;
        margin-right: 0;
        overflow-x: scroll;
    }
`;

export { 
    PopularSection,
    Background,
    ContentContainer,
    SectionTitle,
    ItemContainer,
    MainWrapper,
}