import React from 'react'
import { ContentContainer, ItemContainer, Label, LabelContainer, ProductInfoContainer, CardContainer } from './style'
import Image from "next/image";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Link from 'next/link';

interface ICardProps {
    title: string;
    price: number;
    description: string;
    isHot: boolean;
    image: string;
    id: number;
}

const ItemCard: React.FC<ICardProps> = (props) => {

    console.log(props.image);

  return (
    <CardContainer>
        <Link href={`detail/${props.id}`} passHref>
            <a>
                <ItemContainer className='item-hover'>
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
            </a>
        </Link>
    </CardContainer>
  )
}

export default ItemCard