import React from "react";
import PropTypes from "prop-types";

import {
  CardContainer,
  CardImage,
  Price,
  Products,
  Discount,
  Box
} from "./Card.styles";

const Card = ({ image, product, price, discount }) => {
  return (
    <CardContainer>
      <Discount>
        <Box>{discount}</Box>
      </Discount>
      <CardImage src={image} alt="logo" />
      <Products>{product}</Products>
      <Price>{price}</Price>
    </CardContainer>
  );
};
Card.propTypes = {
  discount: PropTypes.string,
  image: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.string
};

Card.defaultProps = {
  discount: "",
  image: "",
  product: "",
  price: ""
};

export default Card;
