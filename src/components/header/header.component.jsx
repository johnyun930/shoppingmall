import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer,  OptionLink, OptionsContainer } from './header.styles';
const Header = ({currentUser,hidden})=>(
    <HeaderContainer>
        <Link to ="/">
            <Logo/>
        </Link>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/contact">
                Contact
            </OptionLink>
            {
                currentUser?
                <OptionLink as="div" onClick={()=>console.log(auth.signOut())}>SIGN OUT</OptionLink>:
                <OptionLink to="/signin"> SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>{
        hidden?null:<CartDropDown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);