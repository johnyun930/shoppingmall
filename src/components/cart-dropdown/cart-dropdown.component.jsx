import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { CartDropDownButton, CartDropDownContainer, CartItemContainer, EmptyMessage } from './cart-dropdown.styles';
const CartDropDown = ({cartItems,history,dispatch})=>{

    return(
    <CartDropDownContainer>
        <CartItemContainer>{
            cartItems.length?
            cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
            :
            <EmptyMessage>Your cart is empty</EmptyMessage>
        }
            </CartItemContainer>
        
        <CartDropDownButton onClick={()=>{
        history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CartDropDownButton>
    </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))