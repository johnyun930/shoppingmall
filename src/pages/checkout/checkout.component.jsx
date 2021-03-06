import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {CheckoutPageContainer,CheckoutHeader, HeaderBlock, TotalContainer, TestWarmingBox} from './checkout.styles.js';

 const CheckoutPage = ({cartItems,total})=>(
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
          cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }

        <TotalContainer>
            <span>Total: ${total}</span>
        </TotalContainer>
        <TestWarmingBox>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 424242 - Exp: 01/20 - CVV: 133
        </TestWarmingBox>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)
