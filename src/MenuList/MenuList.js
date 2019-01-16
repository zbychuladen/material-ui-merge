import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";

function MenuListM(props) {
  return <MenuList {...props}>{props.children}</MenuList>;
}

MenuListM.propTypes = {
    /**
   * MenuList contents, normally `MenuListItem`s.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the MenuList items will not wrap focus.
   */
  disableListWrap: PropTypes.bool,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func
}

export { MenuListM as default };
