import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop";

function BackdropM(props) {
  return <Backdrop {...props}>{props.children}</Backdrop>;
}

BackdropM.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: PropTypes.bool,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ])
};

export { BackdropM as default };
