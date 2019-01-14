import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

function IconButtonM(props) {
  return <IconButton {...props}>{props.children}</IconButton>;
}

IconButtonM.propTypes = {
  /**
   * The icon element.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool
};

export { IconButtonM as default };
