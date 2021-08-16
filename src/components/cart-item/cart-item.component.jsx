import React from 'react';
import { Image,CartItemContainer, DetailContainer } from './cart-item.styles';


const CartItem = ({item: {imageUrl,price,name,quantity}})=>{
 return(   
     <CartItemContainer>
        <Image src={imageUrl} alt="item"/>
        <DetailContainer>
            <span >{name}</span>
            <span >{quantity} x {price}</span>

        </DetailContainer>
    </CartItemContainer>
 )
}

export default CartItem;