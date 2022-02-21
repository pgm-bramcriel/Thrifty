import React from "react"
import Image from "next/image";

import {
     Background, 
    HeaderContainer, 
    ProductContainer, 
    ProductImageContainerDesktop, 
    HeaderTitle, 
    CtaContainer, 
    ProductImageContainerMobile 
} from "./styles";
import { CtaButton } from "../button/styles";

import productImage from "../../assets/header_image.jpg";

const homepageHeader = () => {
  return (
    <div>
        <HeaderContainer>
            <Background></Background>
            <ProductContainer>
                <ProductImageContainerDesktop>
                    <Image src={productImage} alt="Product image" layout="fill" objectFit="cover"></Image>
                </ProductImageContainerDesktop>

                <CtaContainer>
                    <HeaderTitle>Discover all of our amazing products</HeaderTitle>

                    <ProductImageContainerMobile>
                        <Image src={productImage} alt="Product image" layout="fill" objectFit="cover"></Image>
                    </ProductImageContainerMobile>
                    
                    <CtaButton>Shop</CtaButton>
                </CtaContainer>
            </ProductContainer>
        </HeaderContainer>
    </div>
  );
}

export default homepageHeader