import * as React from 'react';
import SelectM from '../Select';
import MenuItemM from '../../MenuItem/MenuItem';

const MenuItem = (props) => <MenuItem {...props}>{props.children}</MenuItem>;

export default (
  <SelectM key="1">
      <MenuItem value={10} key="2">Ten</MenuItem>
      <MenuItem value={20} key="3">Twenty</MenuItem>
      <MenuItem value={30} key="4">Thirty</MenuItem>
  </SelectM>
);