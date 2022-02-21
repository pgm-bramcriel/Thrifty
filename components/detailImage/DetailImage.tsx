import Image from 'next/image'
import React from 'react'
import productImage from "../../assets/header_image.jpg";
import MainButton from '../button/MainButton';
import Carrousel from '../carrousel/Carrousel';
import Rating from '../rating/Rating';
import { DetailImageContainer, MobileButtonContainer, LeftContainer, BottomImage } from './style';

const DetailImage = () => {
  return (
    <>
    <MobileButtonContainer>
        <MainButton content='Add to cart' />
    </MobileButtonContainer>
    <LeftContainer>
      <DetailImageContainer>
        <Image src={productImage} alt='Product image' objectFit="cover" layout="fill"/>
      </DetailImageContainer>
      <BottomImage>
        <Rating />
        <Carrousel />
      </BottomImage>
    </LeftContainer>
    </>
  )
}

export default DetailImage