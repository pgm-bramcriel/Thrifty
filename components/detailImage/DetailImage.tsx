import Image from 'next/image'
import React from 'react'
import { useStore } from '../../store/basketStore';
import MainButton from '../button/MainButton';
import Carrousel from '../carrousel/Carrousel';
import Rating from '../rating/Rating';
import { DetailImageContainer, MobileButtonContainer, LeftContainer, BottomImage } from './style';

const DetailImage = (props: any) => {
  const addItem = useStore(state => state.addItem);

  const productTitle = props.productName.toString();
  const productPrice = Number(props.price);
  const id = props.id.toString();

  return (
    <>
    <MobileButtonContainer onClick={() => addItem({productTitle, productPrice, id})}>
        <MainButton content='Add to cart' />
    </MobileButtonContainer>
    <LeftContainer>
      <DetailImageContainer>
        <Image src={props.image} alt='Product image' objectFit="cover" layout="fill"/>
      </DetailImageContainer>
      <BottomImage>
        <Rating rating={props.rating}/>
        <Carrousel />
      </BottomImage>
    </LeftContainer>
    </>
  )
}

export default DetailImage