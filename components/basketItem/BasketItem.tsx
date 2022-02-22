import React from 'react'
import { ListItem, Price, ProductTitle } from './style'

interface IBasketItem {
    productTitle: string;
    productPrice: number;
}

const BasketItem: React.FC<IBasketItem> = (props) => {
  return (
    <>
        <ListItem>
            <ProductTitle>{props.productTitle}</ProductTitle>
            <Price>€{props.productPrice}</Price>
        </ListItem>
    </>
  )
}

export default BasketItem