import React from "react";
import PropTypes from "prop-types";
import RadioGroup from "@material-ui/core/RadioGroup";

function RadioGroupM(props) {
  return <RadioGroup {...props}>{props.children}</RadioGroup>;
}

RadioGroupM.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The name used to reference the value of the control.
   */
  name: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when a RadioGroup button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {string} value The `value` of the selected RadioGroup button
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * Value of the selected RadioGroup button.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export { RadioGroupM as default };
