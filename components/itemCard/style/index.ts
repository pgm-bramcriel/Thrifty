import styled from "styled-components";
import { color } from "../../../styles/variables";

const ItemContainer = styled.div`
    width: 20rem;
    height: 25rem;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    z-index: -1;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 1050px) {
        margin-left: 1rem;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Label = styled.div`
    padding: 0.5rem;
    background-color: ${color.mainRed};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.white};
`;

const ProductInfoContainer = styled.div`
    width: 100%;
    font-weight: bold;
    color: ${color.white};
    text-shadow: 2px 2px 25px #000;

    p:nth-child(3) {
        font-weight: normal;
    }
`;

export { 
    ItemContainer,
    LabelContainer,
    ProductInfoContainer, 
    Label, 
    ContentContainer
};