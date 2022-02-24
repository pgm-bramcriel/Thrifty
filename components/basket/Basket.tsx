import React from 'react'
import { useStore } from '../../store/basketStore'
import BasketItem from '../basketItem/BasketItem'
import MainButton from '../button/MainButton'
import { Background, BasketContainer, BasketContentcontainer, BasketList, BasketTitle, CheckoutContainer, Total, Container, ArrowAndContent, Arrow, Empty } from './style'

interface BasketProps {
    isHidden: boolean;
}

export interface IBasketItem {
    id: string;
    productTitle: string;
    productPrice: number;
}

const Basket:React.FC<BasketProps> = (props) => {

    const basket = useStore(state => state.items);
    let total: number = 0;

    return (
        <>
            <Container className={props.isHidden ? '' : 'showBasket'}>
                <ArrowAndContent>
                    <Arrow></Arrow>
                    <BasketContainer>
                        <Background></Background>
                        <BasketContentcontainer>
                            <BasketTitle>Basket ({basket.length})</BasketTitle>
                            <BasketList>
                                { basket.length !== 0 && 
                                    basket.map((item, index) => {
                                        total += item.productPrice;
                                        return(
                                            <BasketItem key={index} productTitle={item.productTitle} productPrice={item.productPrice} id={index}></BasketItem>
                                        )
                                    })
                                }
                                {
                                    basket.length === 0 && <Empty>your basket is currently empty</Empty>
                                }
                            </BasketList>

                            <CheckoutContainer>
                                <Total>
                                    <p>Total</p>
                                    <p>€{total}</p>
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