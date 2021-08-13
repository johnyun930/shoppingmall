import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToPros = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToPros)(CartIcon);