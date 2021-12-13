import React from "react";

//IMPORT COMPONENTS
import {
  HeaderContainer,
  NavContainer,
  Customer,
  MyAccount,
  MyCart
} from "./Header.styles";

const Head = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Customer>Customer Service</Customer>
        <MyAccount>My Account</MyAccount>
        <MyCart>My Cart</MyCart>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Head;
