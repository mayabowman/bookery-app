import React from "react";

const MenuContext = React.createContext({
  isMenuOpen: "",
  stateChangeHandler: () => {},
  closeMenu: () => {}
});

export default MenuContext;