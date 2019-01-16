import * as React from 'react';
import MenuM from '../Menu';
import MenuItemM from "../../MenuItem/MenuItem";

const Menu = (props) => <MenuM {...props}>{props.children}</MenuM>;
const MenuItem = (props) => <MenuItemM {...props}>{props.children}</MenuItemM>;


export default (
  <Menu key="1">
    <MenuItem key="2">Merge 1</MenuItem>
    <MenuItem key="3">Merge 2</MenuItem>
    <MenuItem key="4">Merge 3</MenuItem>
  </Menu>
);