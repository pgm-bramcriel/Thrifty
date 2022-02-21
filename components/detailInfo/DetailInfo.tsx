import React from 'react'
import { CtaButton } from '../button/styles'
import { DetailInfoContainer, Price, Title, DetailInfoInner} from './style'

const DetailInfo = () => {
  return (
    <DetailInfoContainer>
      <DetailInfoInner>
        <Title>Thrift glasses and keyboard</Title> 
        <Price>€351</Price>
        <span>Good condition, pretty new, this is a description</span>
        <CtaButton>Add to cart</CtaButton>
      </DetailInfoInner>
    </DetailInfoContainer>
  )
}

export default DetailInfo