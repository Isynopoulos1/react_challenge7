import React from "react";

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

const Header = ({ placeholder, icon1 }) => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Customer>
          <Menu placeholder="Customer" icon1="help_outline" />
        </Customer>
        <MyAccount>
          <Menu placeholder="My account" icon1="person" />
        </MyAccount>
        <MyCart>
          <Menu placeholder="My cart" icon1="shopping_cart" />
        </MyCart>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
