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
        <Customer placeholder="customer" icon="search" />
        <MyAccount>
          <Menu placeholder="customer" icon="search" />
        </MyAccount>
        <MyCart>
          <Menu placeholder="customer" icon="shopping_cart" />
        </MyCart>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
