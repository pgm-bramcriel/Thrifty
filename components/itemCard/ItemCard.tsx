import React from 'react'
import { ContentContainer, ItemContainer, Label, LabelContainer, ProductInfoContainer } from './style'
import Image from "next/image";
import productImage from "../../assets/header_image.jpg";
import WhatshotIcon from '@mui/icons-material/Whatshot';

interface ICardProps {
    title: string;
    price: number;
    description: string;
    isHot: boolean;
}

const ItemCard: React.FC<ICardProps> = (props) => {
  return (
    <div>
        <ItemContainer>
            <Image src={productImage} alt="Product image" layout="fill" objectFit="cover"></Image>

            <ContentContainer>
                <LabelContainer>
                    { props.isHot &&
                        <Label><WhatshotIcon></WhatshotIcon> Hot</Label>
                    }
                </LabelContainer>
                
                <ProductInfoContainer>
                    <p>{props.title}</p>
                    <p>€{props.price}</p>
                    <p>{props.description}</p>
                </ProductInfoContainer>
            </ContentContainer>  
        </ItemContainer>
    </div>
  )
}

export default ItemCard