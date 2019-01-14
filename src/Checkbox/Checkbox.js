import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxM(props) {
  return <Checkbox {...props} />;
}

CheckboxM.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary", "default"]),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the input.
   */
  indeterminate: PropTypes.bool,

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: PropTypes.node,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * The input component property `type`.
   */
  type: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string
};

export { CheckboxM as default };
