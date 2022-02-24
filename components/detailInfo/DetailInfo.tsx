import React from 'react'
import { IProduct } from '../../pages/api/popularProducts'
import { useStore } from '../../store/basketStore'
import { IBasketItem } from '../basket/Basket'
import MainButton from '../button/MainButton'
import { DetailInfoContainer, Price, Title, DetailInfoInner, DesktopButtonContainer } from './style'

const DetailInfo = (props: any) => {
  const addItem = useStore(state => state.addItem);

  const productTitle = props.productName.toString();
  const productPrice = Number(props.price);
  const id = props.id.toString();

  return (
    <DetailInfoContainer>
      <DetailInfoInner>
        <Title>{props.productName}</Title>
        <Price>€{props.price}</Price>
        <span>{props.description}</span>
        <DesktopButtonContainer onClick={() => addItem({productTitle, productPrice, id})}>
          <MainButton content='Add to cart' />
        </DesktopButtonContainer>
      </DetailInfoInner>
    </DetailInfoContainer>
  )
}

export default DetailInfo