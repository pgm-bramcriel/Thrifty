import React from 'react'
import MainButton from '../button/MainButton'
import { DetailInfoContainer, Price, Title, DetailInfoInner, DesktopButtonContainer } from './style'

const DetailInfo = (props: any) => {
  return (
    <DetailInfoContainer>
      <DetailInfoInner>
        <Title>{props.productName}</Title> 
        <Price>€{props.price}</Price>
        <span>{props.description}</span>
        <DesktopButtonContainer>
          <MainButton content='Add to cart' />
        </DesktopButtonContainer>
      </DetailInfoInner>
    </DetailInfoContainer>
  )
}

export default DetailInfo