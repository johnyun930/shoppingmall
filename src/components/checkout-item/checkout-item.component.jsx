import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import { Arrow, CheckOutItemContainer, Details, Image, ImageContainer, QuantityContainer, RemoveButton, ValueSpan } from './checkout-item.styles';

const CheckoutItem = ({cartItem ,clearItem,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity} = cartItem
    return(
    <CheckOutItemContainer>
        <ImageContainer>
            <Image src={imageUrl} alt="item"/>
        </ImageContainer>
        <Details className="name">{name}</Details>
        <QuantityContainer className="quantity">
        <Arrow className="arrow" onClick={()=>removeItem(cartItem)} >&#10094;</Arrow>
        <ValueSpan className="value">{quantity}</ValueSpan>
        <Arrow className="arrow" onClick={()=>addItem(cartItem)} >&#10095;</Arrow>
        </QuantityContainer>
        <Details className="price">{price}*{quantity}</Details>
        <RemoveButton className="remove-button" onClick={()=>{clearItem(cartItem)}}>&#10005;</RemoveButton>

    </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item =>dispatch(addItem(item)),
    removeItem: item=>dispatch(removeItem(item))
})


export default connect(null,mapDispatchToProps)( CheckoutItem)