import React from "react";
import PropTypes from "prop-types";
import ListItemAvatarM from "@material-ui/core/ListItemAvatar";

function ListItemAvatar(props) {
  return <ListItemAvatarM {...props} />;
}

ListItemAvatar.propTypes = {
  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element,

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

export { ListItemAvatar as default };
