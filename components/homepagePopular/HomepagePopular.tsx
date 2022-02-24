import React from 'react'
import { IProduct } from '../../pages/api/popularProducts'
import ItemCard from '../itemCard/ItemCard'
import { 
    Background, 
    ContentContainer, 
    ItemContainer, 
    PopularSection, 
    SectionTitle,  
} from './style'

const HomepagePopular = (props: {products: Array<IProduct>}) => {
  return (
    <div>
        <PopularSection>
            <Background></Background>
            <div className='secondary-container'>
                <SectionTitle>Popular products</SectionTitle>
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
        </PopularSection>
    </div>
  )
}

export default HomepagePopular