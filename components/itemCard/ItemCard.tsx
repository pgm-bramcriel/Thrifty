import React from 'react'
import { ContentContainer, ItemContainer, Label, LabelContainer, ProductInfoContainer } from './style'
import Image from "next/image";
import WhatshotIcon from '@mui/icons-material/Whatshot';

interface ICardProps {
    title: string;
    price: number;
    description: string;
    isHot: boolean;
    image: string;
}

const ItemCard: React.FC<ICardProps> = (props) => {

    console.log(props.image);

  return (
    <div>
        <ItemContainer>
            <Image src={props.image} alt={props.title} layout="fill" objectFit="cover"></Image>

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