import React from 'react'
import { DeleteButton, ListItem, Price, ProductTitle, ProductContainer } from './style'
import CancelIcon from '@mui/icons-material/Cancel';
import { useStore } from '../../store/basketStore';

interface IBasketItem {
    productTitle: string;
    productPrice: number;
    id: number;
}

const BasketItem: React.FC<IBasketItem> = (props) => {
  const removeItem = useStore(state => state.removeItem);

  return (
    <>
        <ListItem>
          <ProductContainer>
            <ProductTitle>{props.productTitle}</ProductTitle>
            <Price>€{props.productPrice}</Price>
          </ProductContainer>
          <DeleteButton onClick={() => removeItem(props.id)}>
            <CancelIcon></CancelIcon>
          </DeleteButton>
        </ListItem>
    </>
  )
}

export default BasketItem