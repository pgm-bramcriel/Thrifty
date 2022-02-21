import React from 'react'
import ItemCard from '../itemCard/ItemCard'
import { AllProductsSection, Background, ContentContainer, ItemContainer, MainWrapper, SectionTitle } from './style'

const HomepageAllProducts = () => {
  return (
    <div>
        <AllProductsSection>
            <Background></Background>

            <MainWrapper className='main-container'>
                <ContentContainer>
                    <SectionTitle>All products</SectionTitle>
                </ContentContainer>
            </MainWrapper>

            <ItemContainer>
                <ItemCard 
                    title="Product 1"
                    price={351}
                    description="This is a description of product 1"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 2"
                    price={351}
                    description="This is a description of product 2"
                    isHot={false}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>

                <ItemCard
                    title="Product 3"
                    price={351}
                    description="This is a description of product 3"
                    isHot={true}
                ></ItemCard>
            </ItemContainer>
        </AllProductsSection>
    </div>
  )
}

export default HomepageAllProducts