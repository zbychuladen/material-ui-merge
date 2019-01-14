import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";

function MenuItemM(props) {
  return <MenuItem {...props}>{props.children}</MenuItem>;
}

MenuItemM.propTypes = {
  /**
   * Menu item contents.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  role: PropTypes.string,

  selected: PropTypes.bool,

  value: PropTypes.string,
  onClick: PropTypes.func
};

export { MenuItemM as default };
