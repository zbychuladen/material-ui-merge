import React from "react";
import PropTypes from "prop-types";
import SnackBarContent from "@material-ui/core/SnackBarContent";

function SnackBarContentM(props) {
  return <SnackBarContent {...props} />;
}

SnackBarContentM.propTypes = {
/**
   * The action to display.
   */
  action: PropTypes.node,

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
   * The message to display.
   */
  message: PropTypes.node 
};

export { SnackBarContentM as default };
