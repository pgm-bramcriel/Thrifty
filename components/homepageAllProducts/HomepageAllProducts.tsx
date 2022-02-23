import React from 'react'
import ItemCard from '../itemCard/ItemCard'
import { AllProductsSection, Background, ContentContainer, ItemContainer, SectionTitle } from './style'

const HomepageAllProducts = () => {
  return (
    <div>
        <AllProductsSection>
            <Background></Background>

            <div className='secondary-container'>
                <ContentContainer>
                    <SectionTitle>All products</SectionTitle>
                </ContentContainer>

                <ItemContainer>
                    <ItemCard 
                        title="Product 1"
                        price={351}
                        description="This is a description of product 1"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 2"
                        price={351}
                        description="This is a description of product 2"
                        isHot={false}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={1}
                    ></ItemCard>
                </ItemContainer>
            </div>
        </AllProductsSection>
    </div>
  )
}

export default HomepageAllProducts