import React from "react";
import PropTypes from "prop-types";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

function ExpansionPanelDetailsM(props) {
  return <ExpansionPanelDetails {...props}>{props.children}</ExpansionPanelDetails>;
}

ExpansionPanelDetailsM.propTypes = {
  /**
   * The content of the expansion panel details.
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

export { ExpansionPanelDetailsM as default };
