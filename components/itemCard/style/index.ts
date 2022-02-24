import styled from "styled-components";
import { color, media, shadow, transition } from "../../../styles/variables";

const ItemContainer = styled.section`
    width: 18rem;
    max-width: 100%;
    height: 25rem;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    z-index: -1;
    margin-bottom: 1rem;
    box-shadow: ${shadow.main};

    @media (min-width: ${media.large}) {
        width: 100%;
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
    background: linear-gradient(360deg, hsla(0, 0%, 0%, 0.60) 0%, hsla(0, 0%, 0%, 0) 100%);
    transition: ${transition.main};
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

    p {
        font-size: 1.1rem;
        margin-top: 0;
        margin-bottom: 0.3rem;
    }

    p:nth-child(3) {
        font-size: 1rem;
        font-weight: normal;
        margin-bottom: 0.8rem;
        margin-top: 0.5rem;
    }
`;

const CardContainer = styled.div`
    scroll-snap-align: center;
    
    img {
        transition: ${transition.main};
    }
    
    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

export { 
    ItemContainer,
    LabelContainer,
    ProductInfoContainer, 
    Label, 
    ContentContainer,
    CardContainer
};