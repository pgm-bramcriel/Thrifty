import React from 'react'
import MainButton from '../button/MainButton'
import { DetailInfoContainer, Price, Title, DetailInfoInner} from './style'

const DetailInfo = () => {
  return (
    <DetailInfoContainer>
      <DetailInfoInner>
        <Title>Thrift glasses and keyboard</Title> 
        <Price>€351</Price>
        <span>Good condition, pretty new, this is a description</span>
        <MainButton content='Add to cart' />
      </DetailInfoInner>
    </DetailInfoContainer>
  )
}

export default DetailInfo