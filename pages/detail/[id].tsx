import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import DetailImage from '../../components/detailImage/DetailImage';
import DetailInfo from '../../components/detailInfo/DetailInfo';

import BaseLayout from '../../layouts/BaseLayout';
import { IProduct } from '../api/popularProducts';
import { DetailContainer, Background, DetailInner } from './style';

const Detail = (props: {product: any}) => {
  const detailProduct = props.product[0];
  
  return (
    <BaseLayout>
      <Background />
      <DetailContainer className='main-container'>
        <DetailInner>
          <DetailImage rating={detailProduct.voteCount} image={detailProduct.image}/>
          <DetailInfo description={detailProduct.description} price={detailProduct.price} productName={detailProduct.productName}/>
        </DetailInner>
      </DetailContainer>
    </BaseLayout>
  )
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const getProductByIdRes = await fetch(`http://localhost:3000/api/getProductById/${id}`);
  const product = await getProductByIdRes.json();

  console.log(product);
  return {
    props: {
      product,
    }, // will be passed to the page component as props
  }
}

export default Detail