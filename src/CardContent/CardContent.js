import React from "react";
import PropTypes from "prop-types";
import CardContent from "@material-ui/core/CardContent";

function CardContentM(props) {
  return (
    <CardContent {...props}>
      {props.children}
    </CardContent>
  );
}

CardContentM.propTypes = {
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
};

export { CardContentM as default };
