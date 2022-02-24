import React from 'react'
import { IProduct } from '../../pages/api/popularProducts'
import ItemCard from '../itemCard/ItemCard'
import { AllProductsSection, Background, ContentContainer, ItemContainer, SectionTitle } from './style'

const HomepageAllProducts = (props: {products: Array<IProduct>}) => {
  return (
    <div>
        <AllProductsSection id="shop">
            <Background></Background>

            <div className='secondary-container'>
                <ContentContainer>
                    <SectionTitle>All products</SectionTitle>
                </ContentContainer>

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
                                id={product.id}
                                votes={product.votes}
                            ></ItemCard>
                        );
                    })}
                </ItemContainer>
            </div>
        </AllProductsSection>
    </div>
  )
}

export default HomepageAllProducts