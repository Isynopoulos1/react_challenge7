import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { OfferContainer, Details, Navigate } from "./Toggle.styles";

const Toggle = ({ placeholder, icon3 }) => {
  return (
    <OfferContainer>
      <Details>{placeholder}</Details>
      <Navigate>{icon3}</Navigate>
    </OfferContainer>
  );
};
Toggle.propTypes = {
  placeholder: PropTypes.string,
  icon3: PropTypes.string
};

Toggle.defaultProps = {
  placeholder: "Offer Details",
  icon3: ""
};

export default Toggle;
