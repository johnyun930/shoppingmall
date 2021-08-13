import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToPros = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToPros)(CartIcon);