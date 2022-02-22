import React from 'react'
import ItemCard from '../itemCard/ItemCard'
import { 
    Background, 
    ContentContainer, 
    ItemContainer, 
    PopularSection, 
    SectionTitle,  
} from './style'

const HomepagePopular = () => {
  return (
    <div>
        <PopularSection>
            <Background></Background>
            <div className='secondary-container'>
                <SectionTitle>Popular products</SectionTitle>

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
                        isHot={true}
                        id={2}
                    ></ItemCard>

                    <ItemCard
                        title="Product 3"
                        price={351}
                        description="This is a description of product 3"
                        isHot={true}
                        id={3}
                    ></ItemCard>

                    <ItemCard
                        title="Product 4"
                        price={351}
                        description="This is a description of product 4"
                        isHot={true}
                        id={4}
                    ></ItemCard>
                </ItemContainer>
            </div>
        </PopularSection>
    </div>
  )
}

export default HomepagePopular