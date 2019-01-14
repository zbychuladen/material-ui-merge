import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

function CardM(props) {
  return (
    <Card {...props}>
      {props.children}
    </Card>
  );
}

CardM.propTypes = {
  children: PropTypes.node,
    /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
};

export { CardM as default };
