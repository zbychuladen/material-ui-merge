import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";

function ToolbarM(props) {
  return <Toolbar {...props} style={{"justifyContent": props.justifyContent}}>{props.children}</Toolbar>;
}

ToolbarM.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["regular", "dense"]),
  justifyContent: PropTypes.oneOf(["center", "flex-end", "flex-start", "space-around", "space-between", "space-evenly", "stretch"])
};

export { ToolbarM as default };
