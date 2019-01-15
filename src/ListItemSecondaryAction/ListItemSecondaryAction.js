import React from "react";
import PropTypes from "prop-types";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function ListItemSecondaryActionM(props) {
  return <ListItemSecondaryAction {...props}>{props.children}</ListItemSecondaryAction>;
}

ListItemSecondaryActionM.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string 
};

export { ListItemSecondaryActionM as default };
