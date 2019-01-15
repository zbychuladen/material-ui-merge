import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

function LinearProgressM(props) {
  return <LinearProgress {...props} />;
}

LinearProgressM.propTypes = {
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
  color: PropTypes.oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: PropTypes.number,

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
}

export { LinearProgressM as default };
