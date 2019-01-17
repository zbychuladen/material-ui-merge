import * as React from 'react';
import Select from '../Select';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Select key="1">
      <MenuItem value={10} key="2">Ten</MenuItem>
      <MenuItem value={20} key="3">Twenty</MenuItem>
      <MenuItem value={30} key="4">Thirty</MenuItem>
  </Select>
);