import styled from "styled-components";
import { color, fontSize } from "../../../styles/variables";

const ListItem = styled.li`
    width: 100%;
    border-bottom: 1px solid black;
    padding: 0;
    display: flex;
`;

const Price = styled.p`
    font-size: 1.2rem;
`;

const ProductTitle = styled.p`
    font-size: 1.2rem;
    flex-grow: 1;
`;

export {
    ListItem,
    Price,
    ProductTitle,
}