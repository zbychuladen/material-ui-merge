import React from "react";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";

function BadgeM(props) {
  return <Badge {...props}>{props.children}</Badge>;
}

BadgeM.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,

  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "error"]),

  /**
   * If `true`, the badge will be invisible.
   */
  invisible: PropTypes.bool
};

export { BadgeM as default };
