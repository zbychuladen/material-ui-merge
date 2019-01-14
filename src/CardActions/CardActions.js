import React from "react";
import PropTypes from "prop-types";
import CardActions from "@material-ui/core/CardActions";

function CardActionsM(props) {
  return (
    <CardActions {...props}>
      {props.children}
    </CardActions>
  );
}

CardActionsM.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: PropTypes.bool
};

export { CardActionsM as default };
