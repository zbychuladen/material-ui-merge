import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function FormControlLabelM(props) {
  return <FormControlLabel {...props}>{props.children}</FormControlLabel>;
}

FormControlLabelM.propTypes = {
/**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),

  /**
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /*
   * @ignore
   */
  name: PropTypes.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,

  /**
   * The value of the component.
   */
  value: PropTypes.string
};

export { FormControlLabelM as default };
