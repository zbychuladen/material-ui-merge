import React from "react";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";

function BottomNavigationM(props) {
  return <BottomNavigation {...props}>{props.children}</BottomNavigation>;
}

BottomNavigationM.propTypes = {
 /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Callback fired when the value changes.
   */
  onChange: PropTypes.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: PropTypes.bool,
  /**
   * The value of the currently selected BottomNavigationAction.
   */
  value: PropTypes.string
};

export { BottomNavigationM as default };
