import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";

function FormGroupM(props) {
  return <FormGroup {...props}>{props.children}</FormGroup>;
}

FormGroupM.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

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
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool
};

export { FormGroupM as default };
