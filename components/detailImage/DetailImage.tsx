import Image from 'next/image'
import React from 'react'
import productImage from "../../assets/header_image.jpg";
import { DetailImageContainer } from './style';

const DetailImage = () => {
  return (
    <DetailImageContainer>
      <Image src={productImage} alt='Product image' objectFit="cover" layout="fill"/>
    </DetailImageContainer>
  )
}

export default DetailImage