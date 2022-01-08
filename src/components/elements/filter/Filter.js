import React from "react";
import PropTypes from "prop-types";
import {
  FilterContainer,
  Photobooks,
  Calendars,
  Prints,
  WallArt,
  Products,
  Blog,
  Cards,
  Next
} from "./Filter.styles";

const Filter = ({ icon3 }) => {
  return (
    <FilterContainer>
      <Photobooks>Photo books</Photobooks>
      <Next>{icon3}</Next>
      <Calendars>Photo calendars</Calendars>
      <Next>{icon3}</Next>
      <Cards>Personalised cards</Cards>
      <Next>{icon3}</Next>
      <Prints>Photo prints</Prints>
      <Next>{icon3}</Next>
      <WallArt>Wall arts</WallArt>
      <Next>{icon3}</Next>
      <Products>More products</Products>
      <Next>{icon3}</Next>
      <Blog>Blog</Blog>
    </FilterContainer>
  );
};
Filter.propTypes = {
  icon3: PropTypes.string
};

Filter.defaultProps = {
  icon3: ""
};

export default Filter;
