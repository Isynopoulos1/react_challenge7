import React from "react";
import PropTypes from "prop-types";

import { CardContainer, CardImage, Price, Products } from "./Card.styles";

const Card = ({ image, product, price }) => {
  return (
    <CardContainer>
      <CardImage>{image}</CardImage>
      <Products>{product}</Products>
      <Price>{price}</Price>
    </CardContainer>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.string
};

Card.defaultProps = {
  image: "",
  product: "",
  price: ""
};

export default Card;
