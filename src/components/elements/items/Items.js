import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { ItemsWrapper, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../card/Card";

const Items = ({ list }) => {
  const mappedList = list.map(card => (
    <Card
      key={card.i}
      discount={card.discount}
      image={card.image}
      product={card.product}
      price={card.price}
    />
  ));
  //RENDER
  return (
    <ItemsWrapper>
      <Cards>{mappedList}</Cards>
    </ItemsWrapper>
  );
};
Items.propTypes = {
  list: PropTypes.array
};

Items.defaultProps = {
  list: []
};
export default Items;
