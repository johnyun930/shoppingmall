import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <Link to="/">
      <Logo />
    </Link>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin"> SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
