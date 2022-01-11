import React from "react";

import { CardContainer, CardImage, Price, Products } from "./Card.styles";

const Card = () => {
  return (
    <CardContainer>
      <CardImage></CardImage>
      <Products></Products>
      <Price></Price>
    </CardContainer>
  );
};

export default Card;
