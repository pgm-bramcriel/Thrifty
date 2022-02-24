import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { useStore } from '../../store/basketStore';
import MainButton from '../button/MainButton';
import Carrousel from '../carrousel/Carrousel';
import Rating from '../rating/Rating';
import { DetailImageContainer, MobileButtonContainer, LeftContainer, BottomImage } from './style';

const DetailImage = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const itemId = { id };
  const addItem = useStore(state => state.addItem);

  const productTitle = props.productName.toString();
  const productPrice = Number(props.price);
  const productId = props.id.toString();

  return (
    <>
    <MobileButtonContainer onClick={() => addItem({productTitle, productPrice, productId})}>
        <MainButton content='Add to cart' />
    </MobileButtonContainer>
    <LeftContainer>
      <DetailImageContainer>
        <Image src={props.image} alt='Product image' objectFit="cover" layout="fill"/>
      </DetailImageContainer>
      <BottomImage>
        <Rating rating={props.rating} itemId={itemId.id}/>
        <Carrousel />
      </BottomImage>
    </LeftContainer>
    </>
  )
}

export default DetailImage