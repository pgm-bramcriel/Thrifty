import Image from 'next/image'
import React from 'react'
import MainButton from '../button/MainButton';
import Carrousel from '../carrousel/Carrousel';
import Rating from '../rating/Rating';
import { DetailImageContainer, MobileButtonContainer, LeftContainer, BottomImage } from './style';

const DetailImage = (props: any) => {
  return (
    <>
    <MobileButtonContainer>
        <MainButton content='Add to cart' />
    </MobileButtonContainer>
    <LeftContainer>
      <DetailImageContainer>
        <Image src={props.image} alt='Product image' objectFit="cover" layout="fill"/>
      </DetailImageContainer>
      <BottomImage>
        <Rating rating={props.rating} prodictInfo={props.productId}/>
        <Carrousel />
      </BottomImage>
    </LeftContainer>
    </>
  )
}

export default DetailImage