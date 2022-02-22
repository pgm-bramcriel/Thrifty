import React from 'react'
import { IProduct } from '../../pages/api/popularProducts'
import ItemCard from '../itemCard/ItemCard'
import { 
    Background, 
    ContentContainer, 
    ItemContainer, 
    MainWrapper, 
    PopularSection, 
    SectionTitle,  
} from './style'

const HomepagePopular = (props: {products: Array<IProduct>}) => {
  return (
    <div>
        <PopularSection>
            <Background></Background>

            <MainWrapper className='main-container'>
                <ContentContainer>
                    <SectionTitle>Popular products</SectionTitle>
                </ContentContainer>
            </MainWrapper>

            <ItemContainer>
                {props.products.map(product => {
                    return(
                        <ItemCard 
                            key={product.id}
                            title={product.productName}
                            price={product.price}
                            description={product.description}
                            isHot={product.isHot}
                            image={product.image}
                        ></ItemCard>
                    );
                })}
            </ItemContainer>
        </PopularSection>
    </div>
  )
}

export default HomepagePopular