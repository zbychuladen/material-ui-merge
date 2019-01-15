import React from "react";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";

function FabM(props) {
  return <Fab {...props}>{props.children}</Fab>;
}

FabM.propTypes = {
/**
   * The content of the button.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: PropTypes.string,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['round', 'extended'])  
};

export { FabM as default };
