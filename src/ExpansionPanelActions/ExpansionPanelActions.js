import React from "react";
import PropTypes from "prop-types";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

function ExpansionPanelActionsM(props) {
  return <ExpansionPanelActions {...props}>{props.children}</ExpansionPanelActions>;
}

ExpansionPanelActionsM.propTypes = {
 /**
   * The content of the component.
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
  className: PropTypes.string
};

export { ExpansionPanelActionsM as default };
