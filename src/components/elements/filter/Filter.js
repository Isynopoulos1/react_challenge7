import React from "react";
import {
  FilterContainer,
  Photobooks,
  Calendars,
  Prints,
  WallArt,
  Products,
  Blog,
  Cards
} from "./Filter.styles";

const Filter = () => {
  return (
    <FilterContainer>
      <Photobooks>Photo books</Photobooks>
      <Calendars>Photo calendars</Calendars>
      <Cards>Personalised cards</Cards>
      <Prints>Photo prints</Prints>
      <WallArt>Wall arts</WallArt>
      <Products>More products</Products>
      <Blog>Blog</Blog>
    </FilterContainer>
  );
};

export default Filter;
