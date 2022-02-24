import styled from "styled-components";
import { color, fontSize, transition } from "../../../styles/variables";

const ListItem = styled.li`
    width: 100%;
    border-bottom: 1px solid black;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

const Price = styled.p`
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 0.5rem;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ProductTitle = styled.p`
    font-size: 1.2rem;
    flex-grow: 1;
    margin: 0;
    margin-bottom: 1rem;
`;

const DeleteButton = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    svg {        
        transition: ${transition.main};
    }

    &:hover {
        svg {
            color: ${color.mainRed};
        }
    }
`;

export {
    ListItem,
    Price,
    ProductTitle,
    DeleteButton,
    ProductContainer,
}