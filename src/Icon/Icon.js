import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";

function IconM(props) {
  return <Icon {...props}>{props.children}</Icon>;
}

IconM.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "action",
    "error",
    "disabled"
  ]),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(["inherit", "default", "small", "large"])
};

export { IconM as default };
