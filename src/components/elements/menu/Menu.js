import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { Icon1, MenuNav, NameNav } from "./Menu.styles";

const Menu = ({ icon1, placeholder }) => {
  return (
    <MenuNav>
      <NameNav placeholder={placeholder} />
      <Icon1>{icon1}</Icon1>
    </MenuNav>
  );
};
Menu.propTypes = {
  placeholder: PropTypes.string,
  icon1: PropTypes.string
};

Menu.defaultProps = {
  placeholder: "text",
  icon1: "search"
};

export default Menu;
