import React from "react";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";

function CardHeaderM(props) {
  return (
    <CardHeader {...props} />
  );
}

CardHeaderM.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,

  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * The content of the component.
   */
  subheader: PropTypes.node,

  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: PropTypes.object,

  /**
   * The content of the Card Title.
   */
  title: PropTypes.node,

  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: PropTypes.object
};

export { CardHeaderM as default };
