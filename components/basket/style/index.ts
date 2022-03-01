import styled from "styled-components";
import { color, fontSize, media, shadow } from "../../../styles/variables";

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 4rem;
    display: flex;
    justify-content: flex-end;
    padding-right: 1.3rem;
    padding-left: 1rem;
    right: 0;
    display: none;
`;

const ArrowAndContent = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    align-self: flex-end;
`;

const BasketContainer = styled.div`
    width: 25rem;
    background-color: white;
    border-radius: 10px 0 10px 10px;
    overflow: hidden;
    display: flex;
    box-shadow: ${shadow.main};

    @media (max-width: ${media.medium}) {
        width: 100%;
    }
`;

const Background = styled.div`
    background-color: ${color.accentColor};
    width: 4rem;
`;

const BasketContentcontainer = styled.div`
    padding: 1rem;
    width: 100%;
`;

const BasketTitle = styled.h2`
    color: black;
    font-size: 1.4rem;
    margin: 0;
    margin-bottom: 1rem;
`;

const BasketList = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    max-height: 25rem;
    overflow: auto;
`;

const CheckoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    width: 100%;
`;

const Empty = styled.p`
    font-size: 1.2rem;
    color: black;
`;

export {
    BasketContainer,
    Background,
    BasketTitle,
    BasketContentcontainer,
    BasketList,
    CheckoutContainer,
    Total,
    Container,
    ArrowAndContent,
    Arrow,
    Empty,
}