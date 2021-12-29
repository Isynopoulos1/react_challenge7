import React from "react";
import PropTypes from "prop-types";

import { ContainerBottom, Home, Products, Arrow } from "./Container.styles";

const Container = ({ icon2 }) => {
  return (
    <ContainerBottom>
      <Home>Home</Home>
      <Arrow>{icon2}</Arrow>
      <Products>Products</Products>
    </ContainerBottom>
  );
};
Container.propTypes = {
  icon2: PropTypes.string
};

Container.defaultProps = {
  icon2: ""
};

export default Container;
