import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import Menu from "../../elements/menu/Menu";
//IMPORT STYLES
import {
  HeaderContainer,
  NavContainer,
  Customer,
  MyAccount,
  MyCart
} from "./Header.styles";

const Header = ({ placeholder, icon }) => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Customer>
          <Menu placeholder="customer" icon="search" />
        </Customer>
        <MyAccount>My Account</MyAccount>
        <MyCart>My Cart</MyCart>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
