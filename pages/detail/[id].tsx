import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import DetailImage from '../../components/detailImage/DetailImage';
import DetailInfo from '../../components/detailInfo/DetailInfo';

import BaseLayout from '../../layouts/BaseLayout';
import { DetailContainer, Background, DetailInner } from './style';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  
  console.log(id);
  return (
    <BaseLayout>
      <Background />
      <DetailContainer className='main-container'>
        <DetailInner>
          <DetailImage/>
          <DetailInfo/>
        </DetailInner>
      </DetailContainer>
    </BaseLayout>
  )
}

export default Detail