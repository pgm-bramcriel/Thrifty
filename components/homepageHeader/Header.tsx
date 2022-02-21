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
import MainButton from "../button/MainButton";

const homepageHeader = () => {
  return (
    <div>
        <HeaderContainer>
            <Background></Background>
            <ProductContainer className="main-container">
                <ProductImageContainerDesktop>
                    <Image src={productImage} alt="Product image" layout="fill" objectFit="cover"></Image>
                </ProductImageContainerDesktop>

                <CtaContainer>
                    <HeaderTitle>Discover all of our amazing products</HeaderTitle>

                    <ProductImageContainerMobile>
                        <Image src={productImage} alt="Product image" layout="fill" objectFit="cover"></Image>
                    </ProductImageContainerMobile>
                    
                    <MainButton content='Shop   '/>
                </CtaContainer>
            </ProductContainer>
        </HeaderContainer>
    </div>
  );
}

export default homepageHeader