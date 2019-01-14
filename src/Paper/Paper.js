import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

function PaperM(props) {
  return <Paper {...props}>{props.children}</Paper>;
}

PaperM.propTypes = {
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
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool
};

export { PaperM as default };
