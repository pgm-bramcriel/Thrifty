import React from 'react'
import BasketItem from '../basketItem/BasketItem'
import MainButton from '../button/MainButton'
import { Background, BasketContainer, BasketContentcontainer, BasketList, BasketTitle, CheckoutContainer, Total, Container, ArrowAndContent, Arrow } from './style'

const Basket = () => {
  return (
    <>
        <Container>
            <ArrowAndContent>
                <Arrow></Arrow>
                <BasketContainer>
                    <Background></Background>
                    <BasketContentcontainer>
                        <BasketTitle>Basket</BasketTitle>
                        <BasketList>
                            <BasketItem productTitle="Nice product" productPrice={351}></BasketItem>
                        </BasketList>

                        <CheckoutContainer>
                            <Total>
                                <p>Total</p>
                                <p>€351</p>
                            </Total>
                            <MainButton content="Order"></MainButton>
                        </CheckoutContainer>
                    </BasketContentcontainer>
                </BasketContainer>
            </ArrowAndContent>
            
        </Container>
    </>
  )
}

export default Basket